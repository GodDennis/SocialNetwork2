import { useSelector } from "react-redux";
import { ListItem } from "../../components/ListItem/ListItem";
import s from "./SideBar.module.scss";
import { RootStoreType } from "../../redux/redux";

export const SideBar = () => {
  const userID = useSelector<RootStoreType, number | null>(
    (state) => state.auth.id
  );

  return (
    <nav className={s.nav}>
      <ul>
        <ListItem link={"/" + userID} name="Profle" spriteID="profile" />
        <ListItem link="/message" name="Message" spriteID="messages" />
        <ListItem link="/users" name="Users" spriteID="users" />
        <ListItem link="/music" name="Music" spriteID="music" />
        <ListItem link="/photo" name="Photo" spriteID="photo" />
      </ul>
    </nav>
  );
};
