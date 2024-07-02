"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Fade from "embla-carousel-fade";
import {
  Banknote,
  Bath,
  Bed,
  Home,
  LandPlot,
  MapPin,
  ParkingCircle,
} from "lucide-react";
import { BiSolidCarGarage } from "react-icons/bi";
import { MdBalcony } from "react-icons/md";

import { PropertyFeature, PropertyInfo } from "@/types/property";
import {
  getAmountWithCurrency,
  propertyFullAddress,
} from "@/utilities/property-utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import PropertySection from "./property-section";
import Link from "next/link";

type PropertyDetailsProps = {
  property: PropertyInfo;
};

const BackToSearch = () => (
  <Link href="/client/search" className="text-sm font-semibold text-brand">
    &larr; Back to Search
  </Link>
);

const PropertyDetails = ({ property }: PropertyDetailsProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const getPropertyFeatures = () => {
    const propertyFeatures: PropertyFeature[] = [
      {
        title: "Type",
        value: property.propertyType,
        icon: Home,
      },
      {
        title: "Bedrooms",
        value: property.beds,
        icon: Bed,
      },
      {
        title: "Bathrooms",
        value: property.baths,
        icon: Bath,
      },
      {
        title: "Garage Spaces",
        value: property.garages,
        icon: BiSolidCarGarage,
      },
      {
        title: "Area",
        value: `${property.area} sqft`,
        icon: LandPlot,
      },
      {
        title: "Secure parking",
        icon: ParkingCircle,
      },
    ];

    if (property.balcony) {
      propertyFeatures.push({
        title: "Balcony",
        icon: MdBalcony,
      });
    }

    return propertyFeatures;
  };

  return (
    <div className="mx-auto min-w-[540px] max-w-screen-3xl p-8">
      <div className="mb-8">
        <BackToSearch />
      </div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">
          {propertyFullAddress(property)}
        </h1>
        <p className="mt-1 flex items-center text-muted-foreground">
          <Banknote className="mr-2 size-5" />
          {getAmountWithCurrency(property.price)}
        </p>
      </div>
      <div className="grid grid-cols-12 gap-5 xl:gap-10">
        <div className="col-span-12 space-y-8 md:col-span-8">
          <Carousel setApi={setApi} className="w-full" plugins={[Fade()]}>
            <CarouselContent className="overflow-hidden">
              {property.images.map((image, index) => (
                <CarouselItem key={`image_${index + 1}`}>
                  <div className="relative h-[400px] sm:h-[480px] xl:h-[640px] 2xl:h-[720px]">
                    <Image
                      src={image}
                      alt="Property Image"
                      fill
                      objectFit="cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            <div className="flex items-center justify-center pt-2 text-sm">
              Image {current} of {count}
            </div>
          </Carousel>
          <hr />
        </div>
        <div className="col-span-12 flex flex-row gap-5 md:col-span-4 md:flex-col xl:gap-10">
          {Array.from({ length: 2 }).map((_, index) => (
            <div
              key={index}
              className="relative h-40 w-1/2 sm:h-[200px] md:h-[230px] md:w-auto xl:h-[300px] 2xl:h-[340px]"
            >
              <Image
                src={property.images[0]}
                alt="Property Image"
                fill
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 grid grid-cols-12 gap-5 px-4 xl:gap-10">
        <div className="col-span-12 space-y-8 lg:col-span-8">
          <PropertySection title="Description">
            <p>{property.description}</p>
          </PropertySection>
          <PropertySection title="Features">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {getPropertyFeatures().map((feature, index) => (
                <div key={`feature_${index + 1}`} className="flex items-center">
                  <feature.icon className="mr-2 size-5 text-neutral-600" />
                  <p className="font-medium">{feature.title}</p>
                  {feature.value && feature.value !== 0 && (
                    <p className="text-muted-foreground">: {feature.value}</p>
                  )}
                </div>
              ))}
            </div>
          </PropertySection>
          <PropertySection title="Location" icon={MapPin}>
            <p className="mt-1 text-muted-foreground">
              {propertyFullAddress(property)}
            </p>
            <Image
              src="/images/map-marker.jpg"
              alt="Map Location"
              width={640}
              height={360}
            />
          </PropertySection>
        </div>
      </div>
      <div className="mt-8">
        <BackToSearch />
      </div>
    </div>
  );
};

export default PropertyDetails;
