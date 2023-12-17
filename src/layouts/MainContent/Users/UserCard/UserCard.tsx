import { Btn } from "../../../../components/Btn/Btn";
import nullPhoto from "../../../../assets/camera_200.png";
import s from "./userCard.module.scss";
import { NavLink } from "react-router-dom";
import { memo, useEffect } from "react";
import { follow } from "../../../../dal/api";
import { useSelector } from "react-redux";
import { RootStoreType } from "../../../../redux/redux";

type UserCardPropsType = {
  userName: string;
  status: string | null;
  avatar: string | null;
  id: number;
  followed: boolean;
  deleteUser: (userID: string) => void;
  subscribe: (userID: string) => void;
};

export const UserCard: React.FC<UserCardPropsType> = memo((props) => {
  const { userName, status, avatar, id, followed, subscribe, deleteUser } =
    props;

  return (
    <article>
      <div className={s.flex__container}>
        <img className={s.avatar} src={avatar ? avatar : nullPhoto} alt="" />
        <div className={s.cardInfo}>
          {" "}
          <NavLink to={`/${id}`} className={s.name}>
            {userName}
          </NavLink>
          {status && <div className={s.description}>{status}</div>}
          {followed ? (
            <Btn
              type="button"
              name="Отписаться"
              callback={() => deleteUser(id.toString())}
            />
          ) : (
            <Btn
              type="button"
              name="Подписаться"
              callback={() => subscribe(id.toString())}
            />
          )}
        </div>
      </div>
    </article>
  );
});
