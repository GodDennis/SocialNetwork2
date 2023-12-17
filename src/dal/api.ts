import axios from "axios";

const instanse = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "API-KEY": "25f0951a-3156-41fc-9c33-1b2999b2435f" },
});

export const getUsers = (page: number) => {
  return instanse.get(`users?page=${page}`);
};

export const getProfileInfo = (userID: string | undefined) => {
  return instanse.get(`profile/${userID}`);
};

export const getAuth = () => {
  return instanse.get("auth/me");
};

export const follow = (userID: string | undefined) => {
  return instanse.post(`follow/${userID}`);
};
export const unFollow = (userID: string | undefined) => {
  return instanse.delete(`follow/${userID}`);
};

