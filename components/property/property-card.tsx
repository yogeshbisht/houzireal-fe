"use client";

import Image from "next/image";
import Link from "next/link";
import { PropertyInfo } from "@/types/property";
import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";
import {
  getAmountWithCurrency,
  propertyFullAddress,
} from "@/utilities/property-utils";

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
          <div className="absolute -left-1 -top-1 z-10 size-28 overflow-hidden">
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
    <Card className="relative min-h-[400px]">
      {displayRibbon()}
      <Link href={`/property/${propertyDetails.id}`} className="cursor-pointer">
        <div className="relative h-[240px] 3xl:h-[300px]">
          <Image
            src={getPropertyImage()}
            alt={propertyDetails.address}
            fill
            className="rounded-t-md object-cover"
          />
        </div>
      </Link>
      <CardHeader>
        <CardTitle className="truncate text-base text-brand">
          {propertyFullAddress(propertyDetails)}
        </CardTitle>
        <CardDescription className="font-semibold">
          {getAmountWithCurrency(propertyDetails.price)}
        </CardDescription>
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
