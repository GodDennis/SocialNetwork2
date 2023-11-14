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
        AddNewMessageText={props.AddNewMessageText}
        addNewMessage={props.addNewMessage}
        newMessageTxt={props.messagePage.newMessageText}
        messageInfo={props.messagePage.messageInfo}
      />
    </div>
  );
};
