import { NavLink } from "react-router-dom";

type ListItemPropsType = {
  name: string;
  link: string;
};

export const ListItem = (props: ListItemPropsType) => {
  return (
    <li>
      <NavLink to={props.link}>{props.name}</NavLink>
    </li>
  );
};
