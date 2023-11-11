import { messageInfoPropsType, messagePagePropsType } from "../../../../store";
import { Input } from "../../../../components/Input/Input";
import { DialogMessagesArea } from "./DialogMessagesArea/DialogMessagesArea";
import s from "./DialogMessages.module.scss";
import { ChangeEvent } from "react";

type DialogMessagesPropsType = {
  messageInfo: messageInfoPropsType[];
  addPost: (value: string) => void;
  addNewMessageTxt: (value: string) => void;
  newMessageTxt: string;
};

export const DialogMessages = (props: DialogMessagesPropsType) => {
  const onKeyDownHandler = (value: string) => {
    props.addPost(value);
  };
  const onChangeHandler = (value: string) => {
    props.addNewMessageTxt(value);
  };
  return (
    <div className={s.DialogMessages}>
      <DialogMessagesArea messageInfo={props.messageInfo} />
      <Input
        newMessageTxt={props.newMessageTxt}
        onKeyDownHandler={onKeyDownHandler}
        className={s.DialogInput}
        placeholder="text"
        callback={onChangeHandler}
      />
    </div>
  );
};
