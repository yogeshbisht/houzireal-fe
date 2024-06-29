import { PropertyDetails } from "./property";

export interface UserProfile {
  id: number;
  name: string;
  email: string;
  favorites: PropertyDetails[];
}
