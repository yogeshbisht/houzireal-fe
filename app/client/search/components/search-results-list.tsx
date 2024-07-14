"use client";

import qs from "query-string";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import SearchAction from "./search-action";
import { PropertySearchType } from "@/types";
import { PropertyInfo, PropertyQueryParams } from "@/types/property";
import { useGetPropertiesQuery } from "@/app/services/property.service";
import SearchInputForm from "./search-input-form";
import PropertyCard from "@/components/property/property-card";

const searchTypeOptions = [
  { name: "sale", value: 0, text: "for sale" },
  { name: "rent", value: 1, text: "for rent" },
];

const SearchResultsList = () => {
  const [propertyData, setPropertyData] = useState<PropertyInfo[]>([]);

  const router = useRouter();
  const searchParams = useSearchParams();
  const address = searchParams.get("q") || undefined;
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

  const [searchType, setSearchType] = useState<"sale" | "rent">(
    searchTypeOptions[0].name as PropertySearchType
  );
  const [searchQuery, setSearchQuery] = useState<PropertyQueryParams>({
    page,
    address,
  });

  const { data, isLoading, isError } = useGetPropertiesQuery(searchQuery);

  useEffect(() => {
    setPropertyData(data?.properties || []);
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading properties</div>;
  }

  if (!data || !data.properties) {
    return <div>No properties found</div>;
  }

  const onLoadMore = () => {
    const nextPage = page + 1;
    const newSearchQuery = { ...searchQuery, page: nextPage };

    const newUrl = qs.stringifyUrl({
      url: window.location.pathname,
      query: newSearchQuery,
    });

    setSearchQuery(newSearchQuery);
    router.push(newUrl, { scroll: false });
  };

  const onSearchInput = (searchParams: Record<string, string>) => {
    const queryUrl = qs.stringifyUrl(
      {
        url: "/property",
        query: searchParams,
      },
      {
        skipEmptyString: true,
        skipNull: true,
      }
    );
    console.log(queryUrl);
  };

  return (
    <>
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
        <SearchInputForm
          searchType={searchType}
          onSearchInput={onSearchInput}
        />
      </div>
      <div className="property-grid pt-8">
        {propertyData.map((property) => (
          <PropertyCard
            key={property.id}
            display="search"
            propertyDetails={property}
          />
        ))}
      </div>
      {data.hasMore && <SearchAction onClick={onLoadMore} />}
    </>
  );
};

export default SearchResultsList;
