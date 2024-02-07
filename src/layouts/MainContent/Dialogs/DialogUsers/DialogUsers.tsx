import { useSelector } from "react-redux";
import { DialogUser } from "./DialogUser/DialogUser";
import { DialogSearchBar } from "./DialogSearchBar/DialogSearchBar";
import s from "./DialogUsers.module.scss";
import { dialogUsersSelector } from "../../../../selectors";
import { useEffect } from "react";
import { SetDialogsListTC } from "../../../../redux/message-reducer";
import { useAppDispatch } from "../../../../redux/redux";

export const DialogUsers = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(SetDialogsListTC());
    }, []);
    const dialogUsers = useSelector(dialogUsersSelector);
    const users = dialogUsers.map(el => (
        <div key={el.id}>
            <DialogUser
                id={el.id}
                photo={el.photos.small}
                userName={el.userName}
            />
        </div>
    ));
    return (
        <div className={s.wrapper}>
            <DialogSearchBar />
            <div className={s.dialogUsersWrapper}>{users}</div>
        </div>
    );
};
