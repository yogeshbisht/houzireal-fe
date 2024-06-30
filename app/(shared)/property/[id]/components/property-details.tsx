import React from "react";
import { PropertyInfo } from "@/types/property";
import { propertyFullAddress } from "@/utilities/property-utils";

type PropertyDetailsProps = {
  property: PropertyInfo;
};

const PropertyDetails = ({ property }: PropertyDetailsProps) => {
  return (
    <div className="space-y-4 p-8">
      <h1>{propertyFullAddress(property)}</h1>
    </div>
  );
};

export default PropertyDetails;
