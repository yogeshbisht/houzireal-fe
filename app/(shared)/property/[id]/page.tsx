import React from "react";
import PropertyDetails from "./components/property-details";

const PropertyDetailsPage = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const { id } = params;

  return <PropertyDetails propertyId={id} />;
};

export default PropertyDetailsPage;
