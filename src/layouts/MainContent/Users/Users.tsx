import { UserCard } from "./UserCard/UserCard";
import s from "./users.module.scss";
import { useUsers } from "../../../customHooks/useUsers";

export const Users = () => {
    const { users, followHandler, unFollowHandler } = useUsers();

    let item = users.map(item => {
        return (
            <UserCard
                id={item.id}
                avatar={item.photos.small}
                key={item.id}
                userName={item.name}
                status={item.status}
                followed={item.followed}
                followHandler={followHandler}
                unFollowHandler={unFollowHandler}
                isDisabled={item.isDisabled}
            />
        );
    });
    return (
        <div className={s.container}>
            <div className={s.users}>{item}</div>
        </div>
    );
};
