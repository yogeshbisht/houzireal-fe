"use client";

import Image from "next/image";
import Link from "next/link";
import { PropertyInfo } from "@/types/property";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { propertyFullAddress } from "@/utilities/property-utils";

type PropertyCardProps = {
  propertyDetails: PropertyInfo;
  isTourRequested?: boolean;
  display: "search" | "favorites";
};

const PropertyCard = ({
  propertyDetails,
  display = "search",
}: PropertyCardProps) => {
  const displayRibbon = () => {
    if (display === "favorites") {
      if (propertyDetails.autoSearch) {
        return (
          <div className="absolute -left-1 -top-1 size-28 overflow-hidden">
            <div className="absolute -left-10 top-4 block h-10 w-40 -rotate-45 bg-purple-800 py-1 text-center text-xs text-purple-200 shadow-md">
              <span className="font-medium text-white">Auto</span>
              <br /> Added
            </div>
          </div>
        );
      }
    }
    return null;
  };

  const getPropertyImage = () => {
    if (propertyDetails.images.length > 0) {
      return propertyDetails.images[0];
    }
    return "https://picsum.photos/600/400";
  };

  const propertyParams = [
    { label: "Type", value: propertyDetails.propertyType },
    { label: "Size", value: `${propertyDetails.area} sqft` },
    {
      label: "Rooms",
      value: `${propertyDetails.beds} beds + ${propertyDetails.baths} baths`,
    },
  ];

  return (
    <Card className="relative">
      {displayRibbon()}
      <Link
        href={`/property/${propertyDetails.id}`}
        className="h-auto w-full cursor-pointer"
      >
        <Image
          src={getPropertyImage()}
          alt={propertyDetails.address}
          width={600}
          height={400}
          className="rounded-t-md"
        />
      </Link>
      <CardHeader>
        <CardTitle className="text-base text-purple-800">
          {propertyFullAddress(propertyDetails)}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {propertyParams.map((param) => (
          <div key={param.label} className="flex justify-between text-sm">
            <div className="font-medium">{param.label}</div>
            <div className="text-muted-foreground">{param.value}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
