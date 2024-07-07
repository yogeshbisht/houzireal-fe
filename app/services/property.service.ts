import { api } from "./api.service";
import {
  GetPropertyParams,
  PropertyInfo,
  PropertyQueryParams,
} from "@/types/property";

export const propertyApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProperties: build.query<
      GetPropertyParams,
      PropertyQueryParams | undefined
    >({
      query: (queryParams) => ({
        url: "/property",
        params: queryParams,
      }),
      providesTags: ["Properties"],
    }),

    getPropertyById: build.query<PropertyInfo, string>({
      query: (id) => `/property/${id}`,
    }),
  }),
});

export const { useGetPropertiesQuery, useGetPropertyByIdQuery } = propertyApi;
