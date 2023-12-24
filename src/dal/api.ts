import axios from "axios";

const instanse = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: { "API-KEY": "e92d4549-fb97-4955-9cb9-5add62c0e5ba" },
});

export const API = {
    getUsers(page: number) {
        return instanse.get<ResponseUserType>(`users?page=${page}`);
    },

    getProfileInfo(userID: string | undefined) {
        return instanse.get<ResponseProfileInfoType>(`profile/${userID}`);
    },

    getAuth() {
        return instanse.get<ResponseAuth>("auth/me");
    },

    follow(userID: string | undefined) {
        return instanse.post<CommonResponseFollowType>(`follow/${userID}`);
    },
    unFollow(userID: string | undefined) {
        return instanse.delete<CommonResponseFollowType>(`follow/${userID}`);
    },
    getStatus(userID: number) {
        return instanse.get<string>(`/profile/status/${userID}`);
    },
    setStatus(status: string) {
        return instanse.put<ResponseStatusType<object>>("/profile/status", {
            status,
        });
    },
};

export type ResponseStatusType<T> = {
    resultCode: number;
    messages: string[];
    data: T;
};

export type ResponseUserType = {
    error: null | string | Error;
    items: UserItemsType[];
    totalCount: number;
};

type UserItemsType = {
    followed: boolean;
    id: number;
    name: string;
    photos: { small: string | null; large: string | null };
    status: string | null;
    uniqueUrlName: string | null;
};

type ResponseAuth = {
    resultCode: number;
    messages: string[];
    data: AuthDate;
};

type AuthDate = {
    id: number;
    email: string;
    login: string;
};

type CommonResponseFollowType = {
    resultCode: number;
    messages: string[];
    data: object;
};

export type ResponseProfileInfoType = {
    userId: number | null;
    lookingForAJob: boolean;
    lookingForAJobDescription: string | null;
    aboutMe: string;
    fullName: string | null;
    contacts: {
        github: string | null;
        vk: string | null;
        facebook: string | null;
        instagram: string | null;
        twitter: string | null;
        website: string | null;
        youtube: string | null;
        mainLink: string | null;
    };
    photos: {
        small: string | null;
        large: string | null;
    };
};
