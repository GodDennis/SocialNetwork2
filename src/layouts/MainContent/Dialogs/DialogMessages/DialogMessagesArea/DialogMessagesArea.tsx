import { messageInfoPropsType } from "../../../../../store";
import { DialogMessage } from "./DialogMessage/DialogMessage";

type DialogMessagesArea = {
  messageInfo: messageInfoPropsType[];
};

export const DialogMessagesArea = (props: DialogMessagesArea) => {
  const messages = props.messageInfo.map((el) => (
    <DialogMessage key={el.id} id={el.id} message={el.message} />
  ));
  return <div>{messages}</div>;
};
