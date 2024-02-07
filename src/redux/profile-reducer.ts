import { v1 } from "uuid";
import { profilePagePropsType, profileType } from "../types";
import { Dispatch } from "redux";
import { API } from "../dal/api";
import { ThunkDispatchType } from "./redux";

const profilePage = {
    profileInfo: {
        aboutMe: "",
        contacts: {
            facebook: null,
            github: null,
            instagram: null,
            mainLink: null,
            twitter: null,
            vk: null,
            website: null,
            youtube: null,
        },
        fullName: null,
        lookingForAJob: false,
        lookingForAJobDescription: null,
        photos: { small: null, large: null },
        userId: null,
        status: "",
    },
    posts: [
        {
            id: v1(),
            src: "https://sun9-75.userapi.com/impg/teTw8UF6zBSgt_IvJzVz-wvsKQwNWQupF25QUg/jl790zKnAaM.jpg?size=1200x1600&quality=96&sign=278ffd6e454d0a67972d1ef3387635be&type=album",
            fullName: "Dennis Podreckiy",
            post: "К сажалению в API нет раздела постов, поэтому только обычный Redux",
            time: "TODO Time",
            like: 3,
        },
        {
            id: v1(),
            src: "https://sun9-75.userapi.com/impg/teTw8UF6zBSgt_IvJzVz-wvsKQwNWQupF25QUg/jl790zKnAaM.jpg?size=1200x1600&quality=96&sign=278ffd6e454d0a67972d1ef3387635be&type=album",
            fullName: "Dennis Podreckiy",
            post: "Так же в API защита от большого количества запросов, если выпадет лоудер, то обнови страницу через некоторое время <3",
            time: "TODO Time",
            like: 0,
        },
    ],
    newPostText: "",
};

export const postReducer = (
    state: profilePagePropsType = profilePage,
    action: ProfileActionTypes
) => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost = {
                id: v1(),
                src: "https://sun9-75.userapi.com/impg/teTw8UF6zBSgt_IvJzVz-wvsKQwNWQupF25QUg/jl790zKnAaM.jpg?size=1200x1600&quality=96&sign=278ffd6e454d0a67972d1ef3387635be&type=album",
                fullName: "Dennis Podreckiy",
                post: state.newPostText,
                time: "TODO Time",
                like: 0,
            };
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: "",
            };
        }

        case "ADD-NEW-POST-TEXT": {
            return { ...state, newPostText: action.value };
        }
        case "SET-PROFILE-INFO": {
            return { ...state, profileInfo: { ...action.data, status: "" } };
        }
        case "SET-PROFILE-ID": {
            return {
                ...state,
                profileInfo: { ...state.profileInfo, userId: action.ID },
            };
        }
        case "SET-STATUS": {
            return { ...state, profileInfo: { ...state.profileInfo, status: action.status } };
        }
        case "GET-STATUS": {
            return { ...state, profileInfo: { ...state.profileInfo, status: action.status } };
        }
        default:
            return { ...state };
    }
};

export const AddPostAC = () => {
    return {
        type: "ADD-POST",
    } as const;
};
export const AddNewPostTextAC = (value: string) => {
    return {
        type: "ADD-NEW-POST-TEXT",
        value,
    } as const;
};
export const SetProfileInfoAC = (data: Omit<profileType, "status">) => {
    return {
        type: "SET-PROFILE-INFO",
        data,
    } as const;
};
export const SetProfileIdAC = (ID: number) => {
    return {
        type: "SET-PROFILE-ID",
        ID,
    } as const;
};

export const SetStatusAC = (status: string) => {
    return {
        type: "SET-STATUS",
        status,
    } as const;
};
export const GetStatusAC = (status: string) => {
    return {
        type: "GET-STATUS",
        status,
    } as const;
};

export const SetProfileTC = (userID: number) => async (dispatch: ThunkDispatchType) => {
    const res = await API.getProfileInfo(userID);
    dispatch(SetProfileInfoAC(res.data));
    dispatch(GetStatusTC(userID));
};
export const SetStatusTC = (status: string) => async (dispatch: Dispatch) => {
    await API.setStatus(status);
    dispatch(SetStatusAC(status));
};
export const GetStatusTC = (userID: number) => async (dispatch: Dispatch) => {
    const res = await API.getStatus(userID);
    dispatch(GetStatusAC(res.data));
};

type AddPost = ReturnType<typeof AddPostAC>;
type AddNewPostText = ReturnType<typeof AddNewPostTextAC>;
type SetProfileInfo = ReturnType<typeof SetProfileInfoAC>;
type SetProfileID = ReturnType<typeof SetProfileIdAC>;
type SetStatus = ReturnType<typeof SetStatusAC>;
type GetStatus = ReturnType<typeof GetStatusAC>;

export type ProfileActionTypes =
    | AddPost
    | AddNewPostText
    | SetProfileInfo
    | SetProfileID
    | SetStatus
    | GetStatus;
