import { cn } from "@/lib/utils";
import React from "react";

const SearchBar = ({ search = false }: { search?: boolean }) => {
  return (
    <div
      className={cn("bg-cover bg-center shadow-sm", {
        "min-h-60": !search,
        "min-h-[480px]": search,
      })}
      style={{ backgroundImage: "url('/images/header-background.jpg')" }}
    />
  );
};

export default SearchBar;
