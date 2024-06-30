import React from "react";
import NotFound from "@/components/common/not-found";
import { getSampleProperties } from "@/dev-data/sample-properties";

const PropertyDetailsPage = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const { id } = params;
  const propertyDetails = getSampleProperties().find(
    (property) => property.id === id
  );

  if (!propertyDetails) {
    return (
      <NotFound
        message="We are not able to find the property you're looking for."
        linkText="Go to Properties Search page"
      />
    );
  }

  return (
    <div>
      <h1>{`Property Name for ${params.id}`}</h1>
    </div>
  );
};

export default PropertyDetailsPage;
