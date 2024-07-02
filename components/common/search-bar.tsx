import { cn } from "@/lib/utils";
import React from "react";

const SearchBar = ({ search = false }: { search?: boolean }) => {
  return (
    <div
      className={cn("bg-cover bg-center shadow-sm", {
        "min-h-60": !search,
        "min-h-[540px]": search,
      })}
      style={{ backgroundImage: "url(https://picsum.photos/1920/540" }}
    />
  );
};

export default SearchBar;
