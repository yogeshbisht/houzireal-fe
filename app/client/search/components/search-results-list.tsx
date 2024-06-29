import React from "react";
import { getSampleProperties } from "@/dev-data/sample-properties";
import PropertyCard from "@/components/property/property-card";

const SearchResultsList = () => {
  const sampleProperties = getSampleProperties();
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4">
      {sampleProperties.map((property) => (
        <PropertyCard
          key={property.id}
          display="search"
          propertyDetails={property}
        />
      ))}
    </div>
  );
};

export default SearchResultsList;
