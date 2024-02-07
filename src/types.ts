import { MessagesItemType, ResponseDialogsType } from "./dal/api";

export type statePropsType = {
    messagePage: messagePagePropsType;
    profilePage: profilePagePropsType;
};

export type messageInfoType = { items: MessagesItemType[]; totalCount: number };

export type messagePagePropsType = {
    messageInfo: messageInfoType;
    dialogsUsers: ResponseDialogsType[];
    newMessageText: string;
    friendAvatar: string | null;
    ownerAvatar: string | null;
    friendName: string;
    currentFriendId: null | string;
    setScrollBarDown: boolean;
};

export type messageItemsPropsType = {
    firstMessageRef?: any;
    message?: string;
    id?: string;
    src?: string;
    userName?: string;
    senderID?: number;
    AuthId?: number | null;
    friendAvatar?: string | null;
    ownerPhoto?: string | null;
};

export type dialogsUsersPropsType = {
    userName: string;
    src: string;
    id: string;
};

export type profilePagePropsType = {
    profileInfo: profileType;
    posts: PostPropsType[];
    newPostText: string;
};

export type profileType = {
    userId: null | number;
    lookingForAJob: boolean;
    lookingForAJobDescription: null | string;
    aboutMe: string;
    fullName: null | string;
    status: string;
    contacts: {
        facebook: null | string;
        github: null | string;
        instagram: null | string;
        mainLink: null | string;
        twitter: null | string;
        vk: null | string;
        website: null | string;
        youtube: null | string;
    };
    photos: { small: null | string; large: null | string };
};

export type PostPropsType = {
    id: string;
    src: string;
    fullName: string;
    post: string;
    time: string;
    like: number;
};
