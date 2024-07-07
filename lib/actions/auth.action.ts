"use server";

import { cookies } from "next/headers";
import { ErrorResponse, GetRequest, PostRequest } from "../API";
import { SignInUserParams, SignUpUserParams } from "@/types/user";

const cookieExpiryDate = () => {
  const date = new Date();
  return date.setDate(date.getDate() + 7);
};

export const signInUserAction = async (params: SignInUserParams) => {
  try {
    const response = await PostRequest("/auth/signin", params, true);
    const result = await response.json();

    if (result.token) {
      cookies().set("token", result.token, {
        expires: cookieExpiryDate(),
        path: "/",
      });
      return result;
    }
    return ErrorResponse(result);
  } catch (error: any) {
    return ErrorResponse(error);
  }
};

export const signUpUserAction = async (params: SignUpUserParams) => {
  try {
    const response = await PostRequest("/auth/signup", params, true);
    const result = await response.json();

    if (result.token) {
      cookies().set("token", result.token, {
        expires: cookieExpiryDate(),
        path: "/",
      });
      return result;
    }
    return ErrorResponse(result);
  } catch (error: any) {
    return ErrorResponse(error);
  }
};

export const signOutUserAction = async () => {
  try {
    const response = await GetRequest("/auth/signout");
    const result = await response.json();

    if (result.data) {
      cookies().delete("token");
      return result;
    }
    return ErrorResponse(result);
  } catch (error: any) {
    return ErrorResponse(error);
  }
};
