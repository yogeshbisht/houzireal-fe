import React from "react";

export interface PropertyInfo {
  id: string;
  description: string;
  address: string;
  city: string;
  zip: string;
  price: number;
  beds: number;
  baths: number;
  garages: number;
  balcony?: boolean;
  area: number;
  images: string[];
  propertyType: string;
  autoSearch: boolean;
}

export interface PropertyFeature {
  title: string;
  value?: any;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
