import { ListItem } from "../../components/ListItem/ListItem";
import s from "./SideBar.module.scss";

export const SideBar = () => {
  return (
    <nav className={s.nav}>
      <ul>
        <ListItem link="/" name="Profle" />
        <ListItem link="/message" name="Message" />
        <ListItem link="/users" name="Users" />
        <ListItem link="/music" name="Music" />
        <ListItem link="/settings" name="Settings" />
      </ul>
    </nav>
  );
};
