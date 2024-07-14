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
  id: string;
  name: string;
  email: string;
  favorites?: string[];
}
