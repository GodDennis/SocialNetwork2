// export type StorePropsType = {
//   state: statePropsType;
//   getState: () => statePropsType;
// };

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
  profileInfo: ProfileInfoPropsType;
  posts: PostPropsType[];
  newPostText: string;
};

export type ProfileInfoPropsType = {
  src: string;
  birthday: string;
  fullName: string;
  country: string;
  education: string;
  webSite: string;
};
export type PostPropsType = {
  id: string;
  src: string;
  fullName: string;
  post: string;
  time: string;
  like: number;
};
