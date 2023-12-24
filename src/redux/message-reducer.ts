import { messagePagePropsType } from "../types";
import { v1 } from "uuid";

const messagePage = {
  dialogsUsers: [
    {
      name: "DEA169",
      src: "https://as2.ftcdn.net/v2/jpg/04/72/34/15/1000_F_472341541_3Z3jur9a5RP4sUjjVMttyCL0IJQ429pi.jpg",
      id: v1(),
    },
    {
      name: "GODDENNIS",
      src: "https://as2.ftcdn.net/v2/jpg/04/72/34/15/1000_F_472341541_3Z3jur9a5RP4sUjjVMttyCL0IJQ429pi.jpg",
      id: v1(),
    },
    {
      name: "Gieben",
      src: "https://as2.ftcdn.net/v2/jpg/04/72/34/15/1000_F_472341541_3Z3jur9a5RP4sUjjVMttyCL0IJQ429pi.jpg",
      id: v1(),
    },
    {
      name: "Мексиканец",
      src: "https://as2.ftcdn.net/v2/jpg/04/72/34/15/1000_F_472341541_3Z3jur9a5RP4sUjjVMttyCL0IJQ429pi.jpg",
      id: v1(),
    },
    {
      name: "Пашка",
      src: "https://as2.ftcdn.net/v2/jpg/04/72/34/15/1000_F_472341541_3Z3jur9a5RP4sUjjVMttyCL0IJQ429pi.jpg",
      id: v1(),
    },
  ],
  messageInfo: [
    {
      message: "smth",
      id: v1(),
    },
    {
      message: "Что-то на важном",
      id: v1(),
    },
    {
      message: "Что-то на важном",
      id: v1(),
    },
    {
      message: "Что-то на важном",
      id: v1(),
    },
    {
      message: "Что-то на важном",
      id: v1(),
    },
  ],
  newMessageText: "",
};

export const meessageReducer = (
  state: messagePagePropsType = messagePage,
  action: MessageActionTypes
) => {
  switch (action.type) {
    case "ADD-MESSAGE": {
      let newMessage = {
        message: state.newMessageText,
        id: v1(),
      };
      return {
        ...state,
        messageInfo: [...state.messageInfo, newMessage],
        newMessageText: "",
      };
    }
    case "ADD-NEW-MESSAGE-TEXT": {
      return { ...state, newMessageText: action.value };
    }
    default:
      return { ...state };
  }
};

export type MessageActionTypes = AddMessage | AddNewMessageText;

type AddMessage = ReturnType<typeof AddMessageAC>;
type AddNewMessageText = ReturnType<typeof AddNewMessageTextAC>;

export const AddMessageAC = () => {
  return {
    type: "ADD-MESSAGE",
  } as const;
};
export const AddNewMessageTextAC = (value: string) => {
  return {
    type: "ADD-NEW-MESSAGE-TEXT",
    value,
  } as const;
};
