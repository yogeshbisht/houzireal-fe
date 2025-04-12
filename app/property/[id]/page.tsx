import React from "react";
import PropertyDetails from "@/components/property/property-details";

type PropertyParams = {
  id: string;
};

interface PropertyDetailsPageProps {
  params: Promise<PropertyParams>;
}

const PropertyDetailsPage = async ({ params }: PropertyDetailsPageProps) => {
  const { id } = await params;

  return <PropertyDetails propertyId={id} />;
};

export default PropertyDetailsPage;
