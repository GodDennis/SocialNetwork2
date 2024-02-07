import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import s from "./DialogUser.module.scss";
import nullPhoto from "../../../../../assets/camera_200.png";
import { useAppDispatch } from "../../../../../redux/redux";
import {
    AvatarFromUserMessageBarAC,
    CleanMessageAC,
    UserNameFromUserMessageBarAC,
    setScrollBarDownAC,
} from "../../../../../redux/message-reducer";

type DialogUserPropsType = {
    id: number;
    userName: string;
    photo: string | null;
};

export const DialogUser = (props: DialogUserPropsType) => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const onClickHandler = () => {
        dispatch(AvatarFromUserMessageBarAC(props.photo));
        dispatch(UserNameFromUserMessageBarAC(props.userName));
    };

    useEffect(() => {
        dispatch(CleanMessageAC());
        dispatch(setScrollBarDownAC(true));
    }, [id]);

    return (
        <div key={props.id}>
            <NavLink
                onClick={onClickHandler}
                className={s.user}
                to={`/message/${props.id}`}>
                <div>
                    <img
                        className={s.userAvatar}
                        src={props.photo ? props.photo : nullPhoto}
                        alt=''
                    />
                </div>
                <div className={s.border}>
                    <div className={s.user}>{props.userName}</div>
                </div>
            </NavLink>
        </div>
    );
};
