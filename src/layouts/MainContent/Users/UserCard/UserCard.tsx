import { Btn } from "../../../../components/Btn/Btn";
import nullPhoto from "../../../../assets/camera_200.png";
import s from "./userCard.module.scss";
import { NavLink } from "react-router-dom";
import { memo, useEffect } from "react";

type UserCardPropsType = {
    userName: string;
    status: string | null;
    avatar: string | null;
    id: number;
    followed: boolean;
    isDisabled: boolean;
    unFollowHandler: (userID: string) => void;
    followHandler: (userID: string) => void;
};

export const UserCard: React.FC<UserCardPropsType> = memo(props => {
    const { userName, status, avatar, id, followed, isDisabled, followHandler, unFollowHandler } =
        props;
    return (
        <article>
            <div className={s.flex__container}>
                <img
                    className={s.avatar}
                    src={avatar ? avatar : nullPhoto}
                    alt=''
                />
                <div className={s.cardInfo}>
                    {" "}
                    <NavLink
                        to={`/profile/${id}`}
                        className={s.name}>
                        {userName}
                    </NavLink>
                    {status && <div className={s.description}>{status}</div>}
                    {followed ? (
                        <Btn
                            type='button'
                            name='Отписаться'
                            callback={() => unFollowHandler(id.toString())}
                            disabled={isDisabled}
                        />
                    ) : (
                        <Btn
                            type='button'
                            name='Подписаться'
                            callback={() => followHandler(id.toString())}
                            disabled={isDisabled}
                        />
                    )}
                </div>
            </div>
        </article>
    );
});
