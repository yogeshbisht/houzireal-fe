"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import SearchInputForm from "./search-input-form";
import { PropertySearchType } from "@/types";

const searchTypeOptions = [
  { name: "sale", value: 0, text: "for sale" },
  { name: "rent", value: 1, text: "for rent" },
];

const SearchResults = () => {
  const [searchType, setSearchType] = useState<"sale" | "rent">(
    searchTypeOptions[0].name as PropertySearchType
  );

  return (
    <div className="pb-12">
      <div className="mx-2 my-4 flex grow uppercase">
        {searchTypeOptions.map((option) => (
          <div
            key={option.value}
            className={cn(
              "flex-1 cursor-pointer text-center text-sm font-medium",
              {
                "text-purple-800 font-bold": searchType === option.name,
              }
            )}
            onClick={() => {
              setSearchType(option.name as PropertySearchType);
            }}
          >
            {option.text}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <SearchInputForm searchType={searchType} />
      </div>
    </div>
  );
};

export default SearchResults;
