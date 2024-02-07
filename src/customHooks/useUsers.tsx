import { useSelector } from "react-redux";
import { useEffect, useCallback } from "react";
import {
    cleanupAC,
    followTC,
    pushUsersTC,
    setFetchingStatusAC,
    unFollowTC,
} from "../redux/users-reducer";
import { useAppDispatch } from "../redux/redux";
import { isFetchingSelector, pageSelector, usersSelector } from "../selectors";

export const useUsers = () => {
    const dispatch = useAppDispatch();
    const users = useSelector(usersSelector);
    const page = useSelector(pageSelector);
    const isFetching = useSelector(isFetchingSelector);

    // получение пользовтелей из БД
    useEffect(() => {
        if (isFetching) {
            dispatch(pushUsersTC(page));
        }
    }, [isFetching]);
    //--------------------------------

    // бесконечная подгрузка по скролу
    useEffect(() => {
        document.addEventListener("scroll", scrollHandler);
        return () => {
            document.removeEventListener("scroll", scrollHandler);
            dispatch(cleanupAC());
        };
    }, []);

    const scrollHandler = useCallback((e: any) => {
        if (
            e.target.documentElement.scrollTop + window.innerHeight >=
            e.target.documentElement.scrollHeight
        ) {
            dispatch(setFetchingStatusAC(true));
        }
    }, []);

    //--------------------------------

    // добавления в друзья
    const followHandler = (userID: string) => {
        dispatch(followTC(userID));
    };
    //--------------------------------

    // удалению из друзей
    const unFollowHandler = (userID: string) => {
        dispatch(unFollowTC(userID));
    };
    //--------------------------------

    return { users, followHandler, unFollowHandler };
};
