export const store: StorePropsType = {
  state: {
    messagePage: {
      dialogsUsers: [
        {
          name: "DEA169",
          src: "https://as2.ftcdn.net/v2/jpg/04/72/34/15/1000_F_472341541_3Z3jur9a5RP4sUjjVMttyCL0IJQ429pi.jpg",
          id: "21",
        },
        {
          name: "GODDENNIS",
          src: "https://as2.ftcdn.net/v2/jpg/04/72/34/15/1000_F_472341541_3Z3jur9a5RP4sUjjVMttyCL0IJQ429pi.jpg",
          id: "22",
        },
        {
          name: "Gieben",
          src: "https://as2.ftcdn.net/v2/jpg/04/72/34/15/1000_F_472341541_3Z3jur9a5RP4sUjjVMttyCL0IJQ429pi.jpg",
          id: "23",
        },
        {
          name: "Мексиканец",
          src: "https://as2.ftcdn.net/v2/jpg/04/72/34/15/1000_F_472341541_3Z3jur9a5RP4sUjjVMttyCL0IJQ429pi.jpg",
          id: "24",
        },
        {
          name: "Пашка",
          src: "https://as2.ftcdn.net/v2/jpg/04/72/34/15/1000_F_472341541_3Z3jur9a5RP4sUjjVMttyCL0IJQ429pi.jpg",
          id: "25",
        },
      ],
      messageInfo: [
        {
          message: "smth",
          id: "11",
        },
        {
          message: "Что-то на важном",
          id: "12",
        },
        {
          message: "Что-то на важном",
          id: "13",
        },
        {
          message: "Что-то на важном",
          id: "14",
        },
        {
          message: "Что-то на важном",
          id: "15",
        },
      ],
      newMessageText: "",
    },
    profilePage: {
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
          id: "111",
          src: "https://sun9-75.userapi.com/impg/teTw8UF6zBSgt_IvJzVz-wvsKQwNWQupF25QUg/jl790zKnAaM.jpg?size=1200x1600&quality=96&sign=278ffd6e454d0a67972d1ef3387635be&type=album",
          fullName: "Dennis Podreckiy",
          post: "Какой-то пост",
          time: "TODO Time",
          like: 3,
        },
        {
          id: "2222",
          src: "https://sun9-75.userapi.com/impg/teTw8UF6zBSgt_IvJzVz-wvsKQwNWQupF25QUg/jl790zKnAaM.jpg?size=1200x1600&quality=96&sign=278ffd6e454d0a67972d1ef3387635be&type=album",
          fullName: "Dennis Podreckiy",
          post: "Какой-то пост 2",
          time: "TODO Time",
          like: 0,
        },
      ],
      newPostText: "",
    },
  },
  getState() {
    return this.state;
  },
  addNewMessageTxt(value: string) {
    store.state.messagePage.newMessageText = value;
    this._rerender(this.state);
  },
  addPost(message: string) {
    let newMessage = {
      message: message,
      id: "5",
    };
    store.state.messagePage.messageInfo.push(newMessage);
    this._rerender(this.state);
  },
  _rerender(state: statePropsType) {},

  subscribe(observer: (state: statePropsType) => void) {
    this._rerender = observer;
  },
};

export type StorePropsType = {
  state: statePropsType;
  addNewMessageTxt: (value: string) => void;
  getState: () => statePropsType;
  addPost: (value: string) => void;
  _rerender: (state: statePropsType) => void;
  subscribe: (value: (state: statePropsType) => void) => void;
};

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
