import {
  dialogsUsersPropsType,
  messageInfoPropsType,
  messagePagePropsType,
} from "../../../../store";
import { DialogUser } from "./DialogUser/DialogUser";

type DialogUsersPropsType = {
  dialogUsers: dialogsUsersPropsType[];
};
export const DialogUsers = (props: DialogUsersPropsType) => {
  const users = props.dialogUsers.map((el) => (
    <DialogUser key={el.id} id={el.id} src={el.src} name={el.name} />
  ));
  return <div>{users}</div>;
};
