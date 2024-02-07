import { useSelector } from "react-redux";
import s from "./DialogUserBar.module.scss";
import { RootStoreType } from "../../../../../redux/redux";
import nullPhoto from "../../../../../assets/camera_200.png";
import { DialogfriendName, FriendAvatarSelector } from "../../../../../selectors";

export const DialogUserBar = () => {
    const friendAvatar = useSelector(FriendAvatarSelector);
    const userName = useSelector(DialogfriendName);
    return (
        <div>
            <div className={s.wrapper}>
                <div className={s.userName}>{userName}</div>
                <img
                    className={s.userImg}
                    src={friendAvatar || nullPhoto}
                    alt=''
                />
            </div>
        </div>
    );
};
