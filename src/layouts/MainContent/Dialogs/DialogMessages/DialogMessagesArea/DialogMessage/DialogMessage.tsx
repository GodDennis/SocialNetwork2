import { messageInfoPropsType } from "../../../../../../store";

export const DialogMessage = (props: messageInfoPropsType) => {
  return (
    <div>
      <p>{props.message}</p>
    </div>
  );
};
