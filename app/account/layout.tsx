import React from "react";
import { redirect } from "next/navigation";
import { GetRequest } from "@/lib/API";

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

  return <>{children}</>;
};

export default AuthLayout;
