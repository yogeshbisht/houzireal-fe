import React from "react";
import Sidebar from "@/components/common/sidebar";
import SearchBar from "@/components/common/search-bar";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="fixed left-0 top-0 z-10 hidden h-screen bg-background shadow-lg sm:block sm:w-16 lg:w-72">
        <Sidebar type="client" />
      </div>
      <div className="ml-0 sm:ml-16 lg:ml-72">
        <SearchBar />
        <div className="p-8">{children}</div>
      </div>
    </>
  );
};

export default ClientLayout;
