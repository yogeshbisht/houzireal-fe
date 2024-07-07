import { UserProfile } from "@/types/user";
import { api } from "./api.service";

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUserProfile: build.query<UserProfile, void>({
      query: () => "/user/profile",
      providesTags: ["UserProfile"],
      transformResponse: (response: { data: UserProfile }) => response.data,
    }),
  }),
});

export const { useGetUserProfileQuery } = userApi;
