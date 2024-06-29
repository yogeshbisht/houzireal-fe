export interface PropertyDetails {
  id: string;
  address: string;
  city: string;
  zip: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  images: string[];
  propertyType: string;
  autoSearch: boolean;
}
