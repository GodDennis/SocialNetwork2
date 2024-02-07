import { useSelector } from "react-redux";
import { ListItem } from "../../components/ListItem/ListItem";
import s from "./SideBar.module.scss";
import { authIDSelector } from "../../selectors";

export const SideBar = () => {
    const authID = useSelector(authIDSelector);

    return (
        <nav className={s.nav}>
            <ul>
                <ListItem
                    link={"/profile/" + authID}
                    name='Профиль'
                    spriteID='profile'
                />
                <ListItem
                    link='/message'
                    name='Сообщения'
                    spriteID='messages'
                />
                <ListItem
                    link='/users'
                    name='Пользователи'
                    spriteID='users'
                />
                <ListItem
                    link='/music'
                    name='Музыка'
                    spriteID='music'
                />
                <ListItem
                    link='/photo'
                    name='Галерея'
                    spriteID='photo'
                />
            </ul>
        </nav>
    );
};
