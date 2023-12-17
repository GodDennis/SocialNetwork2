import { messageInfoPropsType } from "../../../../types";
import { Input } from "../../../../components/Input/Input";
import { DialogMessagesArea } from "./DialogMessagesArea/DialogMessagesArea";
import s from "./DialogMessages.module.scss";

type DialogMessagesPropsType = {
  messageInfo: messageInfoPropsType[];
  addNewMessage: () => void;
  AddNewMessageText: (value: string) => void;
  newMessageTxt: string;
};

export const DialogMessages = (props: DialogMessagesPropsType) => {
  const onKeyDownHandler = () => {
    props.addNewMessage();
  };
  const onChangeHandler = (value: string) => {
    props.AddNewMessageText(value);
  };
  return (
    <div className={s.DialogMessages}>
      <DialogMessagesArea messageInfo={props.messageInfo} />
      <Input
        value={props.newMessageTxt}
        newMessageTxt={props.newMessageTxt}
        onKeyDownHandler={onKeyDownHandler}
        className={s.DialogInput}
        placeholder="text"
        callback={onChangeHandler}
      />
    </div>
  );
};
