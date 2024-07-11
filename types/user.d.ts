import { PropertyInfo } from "./property";

export interface SignInUserParams {
  email: string;
  password: string;
}

export interface SignUpUserParams {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface UserProfile {
  id: number;
  name: string;
  email: string;
  favorites?: PropertyInfo[];
}
