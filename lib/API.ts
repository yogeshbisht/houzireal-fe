import { API_URL } from "@/app/services/api.service";
import { cookies } from "next/headers";

const getApiUrl = (url: string) => `${API_URL}${url}`;

const getRequestHeader = () => {
  const token = cookies().get("token")?.value;

  return {
    "Content-Type": "application/json",
    authorization: token ? `Bearer ${token}` : "",
  };
};

export const GetRequest = async (url: string) => {
  return await fetch(getApiUrl(url), {
    method: "GET",
    headers: getRequestHeader(),
  });
};

export const PostRequest = async (url: string, body: any) => {
  return await fetch(getApiUrl(url), {
    method: "POST",
    headers: getRequestHeader(),
    body: JSON.stringify(body),
  });
};
