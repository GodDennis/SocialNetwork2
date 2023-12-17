import { UserCard } from "./UserCard/UserCard";
import s from "./users.module.scss";
import { useUsers } from "../../../customHooks/useUsers";

export const Users = () => {
  const { users, followHandler, deleteHandler } = useUsers();

  let item = users.map((item) => {
    return (
      <UserCard
        id={item.id}
        avatar={item.photos.small}
        key={item.id}
        userName={item.name}
        status={item.status}
        subscribe={followHandler}
        deleteUser={deleteHandler}
        followed={item.followed}
      />
    );
  });
  return <div className={s.users}>{item}</div>;
};
