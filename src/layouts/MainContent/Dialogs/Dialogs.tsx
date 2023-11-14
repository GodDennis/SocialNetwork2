import { messagePagePropsType } from "../../../store";
import { DialogMessages } from "./DialogMessages/DialogMessages";
import { DialogUsers } from "./DialogUsers/DialogUsers";
import s from "./Dialogs.module.scss";

type DialogsPropsType = {
  messagePage: messagePagePropsType;
  addNewMessage: () => void;
  AddNewMessageText: (value: string) => void;
};

export const Dialogs = (props: DialogsPropsType) => {
  return (
    <div className={s.flexWrapper}>
      <DialogUsers dialogUsers={props.messagePage.dialogsUsers} />
      <DialogMessages
        addNewMessage={props.addNewMessage}
        AddNewMessageText={props.AddNewMessageText}
        messageInfo={props.messagePage.messageInfo}
        newMessageTxt={props.messagePage.newMessageText}
      />
    </div>
  );
};
