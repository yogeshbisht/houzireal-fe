import React from "react";
import { redirect } from "next/navigation";
import Sidebar from "@/components/common/sidebar";
import { getActiveSession } from "@/app/api/auth/[...nextauth]/route";

const ClientLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getActiveSession();

  if (!session) {
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
