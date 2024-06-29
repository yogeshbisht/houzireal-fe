import React from "react";
import Sidebar from "@/components/common/sidebar";
import SearchBar from "@/components/common/search-bar";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="fixed left-0 top-0 z-10 hidden h-screen w-72 bg-background shadow-lg lg:block">
        <Sidebar type="client" />
      </div>
      <div className="ml-72">
        <SearchBar />
        <div className="p-8">{children}</div>
      </div>
    </>
  );
};

export default ClientLayout;
