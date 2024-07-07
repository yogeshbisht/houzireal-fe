"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

import { useAppDispatch } from "@/hooks/use-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInValidator, SignInValidatorType } from "@/lib/validators";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { setProfile } from "@/lib/features/auth/authSlice";
import { toast } from "sonner";
import { signInUserAction } from "@/lib/actions/auth.action";

const AccountLoginPage = () => {
  const dispatch = useAppDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const form = useForm<SignInValidatorType>({
    resolver: zodResolver(SignInValidator),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: SignInValidatorType) => {
    setIsSubmitting(true);
    console.log(data);

    const response = await signInUserAction(data);

    if (response.user) {
      dispatch(setProfile(response.user));
      setIsSubmitting(false);
      return router.push("/client/dashboard");
    }

    dispatch(setProfile(null));
    const errMessage =
      response.statusCode === 500
        ? "An error occurred, please try again later."
        : response.message;
    setIsSubmitting(false);
    toast.error(errMessage);
  };

  return (
    <>
      <CardHeader>
        <CardTitle>Account Login</CardTitle>
        <CardDescription>
          Enter your credentials to access your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="my-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mt-4">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your Password"
                        {...field}
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mt-8">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-brand"
              >
                {isSubmitting && <Loader2 className="mr-2" size={16} />}
                {isSubmitting ? "Signing in..." : "Sign In"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </>
  );
};

export default AccountLoginPage;
