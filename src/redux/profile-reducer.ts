import { v1 } from "uuid";
import { profilePagePropsType, profileType } from "../types";

const profilePage = {
  profileInfo: {
    aboutMe: null,
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
  },
  posts: [
    {
      id: v1(),
      src: "https://sun9-75.userapi.com/impg/teTw8UF6zBSgt_IvJzVz-wvsKQwNWQupF25QUg/jl790zKnAaM.jpg?size=1200x1600&quality=96&sign=278ffd6e454d0a67972d1ef3387635be&type=album",
      fullName: "Dennis Podreckiy",
      post: "Какой-то пост",
      time: "TODO Time",
      like: 3,
    },
    {
      id: v1(),
      src: "https://sun9-75.userapi.com/impg/teTw8UF6zBSgt_IvJzVz-wvsKQwNWQupF25QUg/jl790zKnAaM.jpg?size=1200x1600&quality=96&sign=278ffd6e454d0a67972d1ef3387635be&type=album",
      fullName: "Dennis Podreckiy",
      post: "Какой-то пост 2",
      time: "TODO Time",
      like: 0,
    },
  ],
  newPostText: "",
};

export const postReducer = (
  state: profilePagePropsType = profilePage,
  action: ActionPostReducerTypes
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
      return { ...state, profileInfo: action.data };
    }
    case "SET-PROFILE-ID": {
      return {
        ...state,
        profileInfo: { ...state.profileInfo, userId: action.ID },
      };
    }
    default:
      return { ...state };
  }
};

export type ActionPostReducerTypes =
  | AddPost
  | AddNewPostText
  | SetProfileInfo
  | SetProfileID;

type AddPost = ReturnType<typeof AddPostAC>;
type AddNewPostText = ReturnType<typeof AddNewPostTextAC>;
type SetProfileInfo = ReturnType<typeof SetProfileInfoAC>;
type SetProfileID = ReturnType<typeof SetProfileIdAC>;

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
export const SetProfileInfoAC = (data: profileType) => {
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
