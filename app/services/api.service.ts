import { hasCookie, getCookie } from "cookies-next";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_DOMAIN = process.env.NEXT_PUBLIC_API_DOMAIN;
export const API_URL = `${API_DOMAIN}/api`;

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "application/json");

    if (hasCookie("token")) {
      headers.set("Authorization", `Bearer ${getCookie("token")}`);
    }
    return headers;
  },
  timeout: 60000,
});

export const api = createApi({
  baseQuery,
  tagTypes: ["UserProfile", "Properties"],
  endpoints: () => ({}),
});
