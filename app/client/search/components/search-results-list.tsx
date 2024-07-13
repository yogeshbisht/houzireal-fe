"use client";

import React from "react";
import SearchAction from "./search-action";
import PropertyCard from "@/components/property/property-card";
import { useGetPropertiesQuery } from "@/app/services/property.service";

const SearchResultsList = () => {
  const { data, isLoading, isError } = useGetPropertiesQuery({});

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading properties</div>;
  }

  if (!data || !data.properties) {
    return <div>No properties found</div>;
  }

  return (
    <>
      <div className="property-grid pt-8">
        {data.properties.map((property) => (
          <PropertyCard
            key={property.id}
            display="search"
            propertyDetails={property}
          />
        ))}
      </div>
      {data.hasMore && <SearchAction />}
    </>
  );
};

export default SearchResultsList;
