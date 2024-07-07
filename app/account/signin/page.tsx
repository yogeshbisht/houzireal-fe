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
import AuthFooter from "../components/auth-footer";

const AccountSignInPage = () => {
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

    const response = await signInUserAction(data);

    console.log(response);

    if (response.data) {
      dispatch(setProfile(response.data));
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
      <hr className="mb-6" />
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-4">
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
              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand"
                >
                  {isSubmitting && <Loader2 className="mr-2" size={16} />}
                  {isSubmitting ? "Signing in..." : "Sign In"}
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
      <hr className="mb-6" />
      <AuthFooter
        footerText="Don't have an account?"
        redirectLink="/account/signup"
        authText="Sign Up"
      />
    </>
  );
};

export default AccountSignInPage;
