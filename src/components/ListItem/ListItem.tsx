import { NavLink } from "react-router-dom";
import sprite from "../../assets/sprite.svg";
import s from "./ListItem.module.scss";

type ListItemPropsType = {
  name: string;
  link: string;
  spriteID?: string;
};

export const ListItem = (props: ListItemPropsType) => {
  return (
    <li>
      <NavLink className={s.item} to={props.link}>
        <div className={s.img}>
          <svg
            fill="none"
            height="20"
            viewBox="0 0 20 20"
            width="20"
            xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${sprite}#${props.spriteID}`} />
          </svg>
        </div>

        <span className={s.link}>{props.name}</span>
      </NavLink>
    </li>
  );
};
