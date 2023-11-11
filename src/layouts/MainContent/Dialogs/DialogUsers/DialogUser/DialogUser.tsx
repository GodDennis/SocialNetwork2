import { NavLink } from "react-router-dom";
import s from "./DialogUser.module.scss";

type DialogUserPropsType = {
  id: string;
  name: string;
  src: string;
};

export const DialogUser = (props: DialogUserPropsType) => {
  return (
    <NavLink key={props.id} className={s.user} to={`/dialog/${props.id}`}>
      <img key={props.id} className={s.userAvatar} src={props.src} alt="" />
      <h3 key={props.id} className={s.userName}>
        {props.name}
      </h3>
    </NavLink>
  );
};
