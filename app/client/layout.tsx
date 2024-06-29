import React from "react";
import Sidebar from "@/components/common/sidebar";
import SearchBar from "@/components/common/search-bar";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <div className="relative z-10 hidden h-screen w-72 shadow-lg lg:block">
        <Sidebar type="client" />
      </div>
      <div className="flex-1">
        <SearchBar />
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
};

export default ClientLayout;
