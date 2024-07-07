import React from "react";
import Sidebar from "@/components/common/sidebar";
import { API_URL } from "../services/api.service";
import { redirect } from "next/navigation";

async function checkUserSession() {
  const response = await fetch(`${API_URL}/user/session`);
  const result = await response.json();
  return result.isAuthenticated;
}

const ClientLayout = async ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = await checkUserSession();

  if (!isAuthenticated) {
    redirect("/account/login");
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
