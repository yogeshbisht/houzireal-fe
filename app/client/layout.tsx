import React from "react";
import { redirect } from "next/navigation";
import { GetRequest } from "@/lib/API";
import Sidebar from "@/components/common/sidebar";

async function checkUserSession() {
  const response = await GetRequest("/user/session");
  const result = await response.json();
  return result.isAuthenticated;
}

const ClientLayout = async ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = await checkUserSession();

  if (!isAuthenticated) {
    redirect("/account/signin");
  }

  return (
    <>
      <div className="fixed left-0 top-0 z-10 hidden h-screen bg-background shadow-lg sm:block sm:w-16 lg:w-72">
        <Sidebar type="client" />
      </div>
      <div className="ml-0 sm:ml-16 lg:ml-72">{children}</div>
    </>
  );
};

export default ClientLayout;
