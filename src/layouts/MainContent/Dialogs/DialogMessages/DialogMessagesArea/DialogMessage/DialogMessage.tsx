import { messageInfoPropsType } from "../../../../../../types";

export const DialogMessage = (props: messageInfoPropsType) => {
  return (
    <div>
      <p>{props.message}</p>
    </div>
  );
};
