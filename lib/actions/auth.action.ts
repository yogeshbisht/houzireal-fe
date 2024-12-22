"use server";

import { cookies } from "next/headers";
import { ErrorResponse, GetRequest, PostRequest } from "../API";
import { SignInUserParams, SignUpUserParams } from "@/types/user";

const cookieExpiryDate = () => {
  const date = new Date();
  return date.setDate(date.getDate() + 7);
};

const signInUserAction = async (params: SignInUserParams) => {
  try {
    const response = await PostRequest("/auth/signin", params, true);
    const result = await response.json();

    if (result.token) {
      const cookieStore = await cookies();
      cookieStore.set("token", result.token, {
        expires: cookieExpiryDate(),
        path: "/"
      });
      return result;
    }
    return ErrorResponse(result);
  } catch (error: any) {
    return ErrorResponse(error);
  }
};

const signUpUserAction = async (params: SignUpUserParams) => {
  try {
    const response = await PostRequest("/auth/signup", params, true);
    const result = await response.json();

    if (result.token) {
      const cookieStore = await cookies();
      cookieStore.set("token", result.token, {
        expires: cookieExpiryDate(),
        path: "/"
      });
      return result;
    }
    return ErrorResponse(result);
  } catch (error: any) {
    return ErrorResponse(error);
  }
};

const signOutUserAction = async () => {
  try {
    const response = await GetRequest("/auth/signout");
    const result = await response.json();

    if (result.data) {
      const cookieStore = await cookies();
      cookieStore.delete("token");
      return result;
    }
    return ErrorResponse(result);
  } catch (error: any) {
    return ErrorResponse(error);
  }
};

export { signInUserAction, signUpUserAction, signOutUserAction };
