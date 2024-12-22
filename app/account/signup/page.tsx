"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpValidator, SignUpValidatorType } from "@/lib/validators";
import { signUpUserAction } from "@/lib/actions/auth.action";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import AuthFooter from "../../../components/shared/auth-footer";

const AccountSignUpPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const form = useForm<SignUpValidatorType>({
    resolver: zodResolver(SignUpValidator),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: ""
    }
  });

  const onSubmit = async (data: SignUpValidatorType) => {
    setIsSubmitting(true);
    const response = await signUpUserAction(data);
    setIsSubmitting(false);

    if (response.data) {
      return router.push("/client/dashboard");
    }

    const errMessage =
      response.statusCode === 500
        ? "An error occurred, please try again later."
        : response.message;
    toast.error(errMessage);
  };

  return (
    <>
      <CardHeader>
        <CardTitle>New Account Register</CardTitle>
        <CardDescription>
          Create a new account to get started with our platform.
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
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Confirm Password"
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
                  {isSubmitting ? "Signing up..." : "Sign Up"}
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
      <hr className="mb-6" />
      <AuthFooter
        footerText="Already have an account?"
        redirectLink="/account/signin"
        authText="Sign In"
      />
    </>
  );
};

export default AccountSignUpPage;
