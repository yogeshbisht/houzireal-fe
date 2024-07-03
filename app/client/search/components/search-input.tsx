"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { PropertySearchType } from "@/types";
import SearchInputForm from "./search-input-form";

const searchTypeOptions = [
  { name: "sale", value: 0, text: "for sale" },
  { name: "rent", value: 1, text: "for rent" },
];

const SearchInput = () => {
  const [searchType, setSearchType] = useState<"sale" | "rent">(
    searchTypeOptions[0].name as PropertySearchType
  );

  return (
    <div className="-mt-60 rounded-md bg-white p-8 pt-4 shadow-lg">
      <div className="mb-8 mt-4 flex uppercase">
        {searchTypeOptions.map((option) => (
          <div
            key={option.value}
            className={cn("flex-1 cursor-pointer text-center", {
              "text-brand font-semibold": searchType === option.name,
            })}
            onClick={() => {
              setSearchType(option.name as PropertySearchType);
            }}
          >
            {option.text}
          </div>
        ))}
      </div>
      <SearchInputForm searchType={searchType} />
    </div>
  );
};

export default SearchInput;
