"use client";

import qs from "query-string";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SearchAction from "./search-action";
import { PropertyInfo, PropertyQueryParams } from "@/types/property";
import { useGetPropertiesQuery } from "@/app/services/property.service";
import PropertyCard from "@/components/property/property-card";

const SearchResultsList = () => {
  const [propertyData, setPropertyData] = useState<PropertyInfo[]>([]);

  const router = useRouter();
  const searchParams = useSearchParams();
  const address = searchParams.get("q") || undefined;
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

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

  return (
    <>
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
