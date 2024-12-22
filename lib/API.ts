import { cookies } from "next/headers";
import { API_URL } from "@/app/services/api.service";
import { ResponseErrorParams } from "@/types";

const getApiUrl = (url: string) => `${API_URL}${url}`;

const getRequestHeader = async (isPublicRoute: boolean) => {
  if (isPublicRoute) {
    return {
      "Content-Type": "application/json",
      authorization: ""
    };
  }

  const cookieStore = await cookies();

  const token = cookieStore.get("token");

  return {
    "Content-Type": "application/json",
    authorization: token ? `Bearer ${token}` : ""
  };
};

export const GetRequest = async (
  url: string,
  isPublicRoute: boolean = false
) => {
  return await fetch(getApiUrl(url), {
    method: "GET",
    headers: await getRequestHeader(isPublicRoute)
  });
};

export const PostRequest = async (
  url: string,
  body: any,
  isPublicRoute: boolean = false
) => {
  return await fetch(getApiUrl(url), {
    method: "POST",
    headers: await getRequestHeader(isPublicRoute),
    body: JSON.stringify(body)
  });
};

export const ErrorResponse = (error: any): ResponseErrorParams => {
  let message = "Something went wrong. Please try again later.";

  if (error.code === "ERR_NETWORK") {
    message = "The service is currently unavailable. Please try again later.";
  }

  return {
    statusCode: error?.statusCode || 500,
    message: error?.message || message
  };
};
