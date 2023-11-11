import { messagePagePropsType } from "../../../store";
import { DialogMessages } from "./DialogMessages/DialogMessages";
import { DialogUsers } from "./DialogUsers/DialogUsers";
import s from "./Dialogs.module.scss";

type DialogsPropsType = {
  messagePage: messagePagePropsType;
  addPost: (value: string) => void;
  addNewMessageTxt: (value: string) => void;
};

export const Dialogs = (props: DialogsPropsType) => {
  console.log(props);
  return (
    <div className={s.flexWrapper}>
      <DialogUsers dialogUsers={props.messagePage.dialogsUsers} />
      <DialogMessages
        addPost={props.addPost}
        newMessageTxt={props.messagePage.newMessageText}
        messageInfo={props.messagePage.messageInfo}
        addNewMessageTxt={props.addNewMessageTxt}
      />
    </div>
  );
};
