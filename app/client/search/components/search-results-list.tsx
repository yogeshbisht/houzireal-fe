import React from "react";
import { getSampleProperties } from "@/dev-data/sample-properties";
import PropertyCard from "@/components/property/property-card";

const SearchResultsList = () => {
  const sampleProperties = getSampleProperties();
  return (
    <div className="property-grid pt-8">
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
