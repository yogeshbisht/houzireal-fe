import React from "react";
import { redirect } from "next/navigation";
import { GetRequest } from "@/lib/API";
import { Card } from "@/components/ui/card";

async function checkUserSession() {
  const response = await GetRequest("/user/session");
  const result = await response.json();
  return result.isAuthenticated;
}

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = await checkUserSession();

  if (isAuthenticated) {
    redirect("/client/dashboard");
  }

  return (
    <div className="flex min-h-screen">
      <div className="relative hidden flex-1 bg-[url('/images/auth.png')] bg-cover bg-center bg-no-repeat shadow-md xl:block">
        <div className="absolute size-full bg-black opacity-50" />
      </div>
      <div className="flex flex-1 items-center justify-center">
        <Card className="m-8 w-full">{children}</Card>
      </div>
    </div>
  );
};

export default AuthLayout;
