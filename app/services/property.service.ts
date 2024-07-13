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
      transformResponse: (response: { data: GetPropertyParams }) =>
        response.data,
    }),

    getPropertyById: build.query<PropertyInfo, string>({
      query: (id) => `/property/${id}`,
      transformResponse: (response: { data: PropertyInfo }) => response.data,
    }),

    addPropertyToFavorites: build.mutation<string, string>({
      query: (propertyId) => ({
        url: `/property/${propertyId}/favorite`,
        method: "POST",
      }),
      invalidatesTags: ["UserProfile"],
      transformResponse: (response: { data: string }) => response.data,
    }),
  }),
});

export const {
  useGetPropertiesQuery,
  useGetPropertyByIdQuery,
  useAddPropertyToFavoritesMutation,
} = propertyApi;
