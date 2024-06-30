"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Fade from "embla-carousel-fade";

import { PropertyInfo } from "@/types/property";
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

type PropertyDetailsProps = {
  property: PropertyInfo;
};

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

  return (
    <div className="mx-auto max-w-screen-3xl p-8">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-8">
          <Carousel setApi={setApi} className="w-full" plugins={[Fade()]}>
            <CarouselContent className="overflow-hidden">
              {property.images.map((image, index) => (
                <CarouselItem key={`image_${index + 1}`}>
                  <Image
                    src={image}
                    alt="Property Image"
                    width={1366}
                    height={768}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            <div className="flex items-center justify-center pt-2 text-sm">
              Image {current} of {count}
            </div>
          </Carousel>
          <div>
            <h1 className="text-xl font-medium text-brand">
              {propertyFullAddress(property)}
            </h1>
            <p className="mt-2">{getAmountWithCurrency(property.price)}</p>
          </div>
        </div>
        <div className="col-span-4 flex flex-col gap-4">
          <Image
            src={property.images[0]}
            alt="Property Image"
            width={640}
            height={360}
          />
          <Image
            src={property.images[0]}
            alt="Property Image"
            width={640}
            height={360}
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
