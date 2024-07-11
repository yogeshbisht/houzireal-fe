"use client";

import Image from "next/image";
import Link from "next/link";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { useEffect } from "react";

import { PropertyInfo } from "@/types/property";
import {
  getAmountWithCurrency,
  propertyFullAddress,
} from "@/utilities/property-utils";
import { useGetUserProfileQuery } from "@/app/services/user.service";
import { useAddPropertyToFavoritesMutation } from "@/app/services/property.service";
import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { toast } from "sonner";
import { apiErrorMessage } from "@/utilities/text-utils";
import { cn } from "@/lib/utils";

type PropertyCardProps = {
  propertyDetails: PropertyInfo;
  isTourRequested?: boolean;
  display: "search" | "favorites";
};

const PropertyCard = ({
  propertyDetails,
  display = "search",
}: PropertyCardProps) => {
  const { data: user } = useGetUserProfileQuery();
  const [setFavorite, { data, isLoading: isAdding, isError, error }] =
    useAddPropertyToFavoritesMutation();

  useEffect(() => {
    if (isError) {
      toast.error(
        "Add To Favorites Failed",
        apiErrorMessage(error, "Error adding property to favorites")
      );
    }
    if (data && data === "success") {
      toast.success("Property added to favorites");
    }
  }, [data, isError, error]);

  const propertyParams = () => [
    { label: "Type", value: propertyDetails.propertyType },
    { label: "Size", value: `${propertyDetails.area} sqft` },
    {
      label: "Rooms",
      value: `${propertyDetails.beds} beds + ${propertyDetails.baths} baths`,
    },
  ];

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

  const isUserFavorite = (favorites: PropertyInfo[] | undefined) => {
    if (!favorites?.length) {
      return false;
    }

    return favorites.some((favorite) => favorite.id === propertyDetails.id);
  };

  const onFavClick = (fav: boolean) => {
    if (fav) {
      // Remove from favorites
      // eslint-disable-next-line no-alert
      alert("Remove from favorites");
    } else {
      setFavorite(propertyDetails.id);
    }
  };

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
        {propertyParams().map((param) => (
          <div key={param.label} className="flex justify-between text-sm">
            <div className="font-medium">{param.label}</div>
            <div className="text-muted-foreground">{param.value}</div>
          </div>
        ))}
      </CardContent>
      {user && user.id && (
        <>
          <hr className="w-full" />
          <CardFooter>
            <div
              className={cn("flex w-full items-center justify-end pt-2", {
                "disable-element": isAdding,
              })}
            >
              {isUserFavorite(user.favorites) ? (
                <IoMdHeart
                  className="size-5 cursor-pointer text-red-400"
                  onClick={() => onFavClick(true)}
                />
              ) : (
                <IoMdHeartEmpty
                  className="size-5 cursor-pointer text-red-400"
                  onClick={() => onFavClick(false)}
                />
              )}
            </div>
          </CardFooter>
        </>
      )}
    </Card>
  );
};

export default PropertyCard;
