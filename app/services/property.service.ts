import { api } from "./api.service";
import { PropertyInfo } from "@/types/property";

export const propertyApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProperties: build.query<PropertyInfo[], void>({
      query: () => "/property",
    }),

    getPropertyById: build.query<PropertyInfo, string>({
      query: (id) => `/property/${id}`,
    }),
  }),
});

export const { useGetPropertiesQuery, useGetPropertyByIdQuery } = propertyApi;
