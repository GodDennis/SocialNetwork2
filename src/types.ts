export type statePropsType = {
    messagePage: messagePagePropsType;
    profilePage: profilePagePropsType;
};

export type messagePagePropsType = {
    messageInfo: messageInfoPropsType[];
    dialogsUsers: dialogsUsersPropsType[];
    newMessageText: string;
};

export type messageInfoPropsType = {
    message: string;
    id: string;
};
export type dialogsUsersPropsType = {
    name: string;
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
