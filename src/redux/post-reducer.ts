import { v1 } from "uuid";
import { profilePagePropsType } from "../store";

const profilePage = {
  profileInfo: {
    src: "https://sun9-75.userapi.com/impg/teTw8UF6zBSgt_IvJzVz-wvsKQwNWQupF25QUg/jl790zKnAaM.jpg?size=1200x1600&quality=96&sign=278ffd6e454d0a67972d1ef3387635be&type=album",
    birthday: "26 Feb",
    fullName: "Dennis P",
    country: "Belarus, Minsk",
    education: "BNTU",
    webSite: "https://github.com/GodDennis",
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
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }
    case "ADD-NEW-POST-TEXT": {
      return { ...state, newPostText: action.value };
    }
    default:
      return { ...state };
  }
};

export type ActionPostReducerTypes = AddPost | AddNewPostText;

type AddPost = ReturnType<typeof AddPostAC>;
type AddNewPostText = ReturnType<typeof AddNewPostTextAC>;

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
