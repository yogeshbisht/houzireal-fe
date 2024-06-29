import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PropertyDetails } from "@/types/property";

type PropertyCardProps = {
  propertyDetails: PropertyDetails;
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
    { label: "Size", value: `${propertyDetails.sqft} sqft` },
    {
      label: "Rooms",
      value: `${propertyDetails.beds} beds + ${propertyDetails.baths} baths`,
    },
  ];

  return (
    <Card className="relative">
      {displayRibbon()}
      <div className="h-auto w-full cursor-pointer">
        <Image
          src={getPropertyImage()}
          alt={propertyDetails.address}
          width={600}
          height={400}
          className="rounded-t-md"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{`${propertyDetails.address}, ${propertyDetails.city} - ${propertyDetails.zip}`}</CardTitle>
      </CardHeader>
      <CardContent>
        {propertyParams.map((param) => (
          <div key={param.label} className="flex justify-between">
            <div className="font-bold">{param.label}</div>
            <div>{param.value}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
