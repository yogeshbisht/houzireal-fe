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
          <>
            <div className="corner-ribbon" />
            <div className="corner-text">
              <span>Auto</span>
              <br />
              Added
            </div>
          </>
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
    <Card>
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
