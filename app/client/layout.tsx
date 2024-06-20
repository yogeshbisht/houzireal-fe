import React from "react";
import Sidebar from "@/components/common/sidebar";
import SearchBar from "@/components/common/search-bar";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <div className="hidden h-screen w-80 bg-primary sm:block">
        <Sidebar />
      </div>
      <div className="flex-1">
        <SearchBar />
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default ClientLayout;
