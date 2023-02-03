import { $api } from "../../http";
import { IUsersDataResponse } from "./users.types";

export const fetchUsers = async () => {
  const { data } = await $api.get<IUsersDataResponse[]>("users");
  return data;
};

export const fetchUserPosts = async (userId: number) => {
  const { data } = await $api.get<IUsersDataResponse[]>(
    `users/${userId}/posts`
  );
  return data;
};
