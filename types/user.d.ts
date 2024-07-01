import { PropertyInfo } from "./property";

export interface UserProfile {
  id: number;
  name: string;
  email: string;
  favorites: PropertyInfo[];
}
