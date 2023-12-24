import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useCallback, memo } from "react";
import {
    cleanupAC,
    followAC,
    followTC,
    pushUsersAC,
    pushUsersTC,
    setFetchingStatusAC,
    unFollowAC,
    unFollowTC,
    userType,
} from "../redux/users-reducer";

import { RootStoreType, useAppDispatch } from "../redux/redux";
import { API } from "../dal/api";

export const useUsers = () => {
    const dispatch = useAppDispatch();
    const users = useSelector<RootStoreType, userType[]>(state => state.usersPage.items);
    const page = useSelector<RootStoreType, number>(state => state.usersPage.pageNumber);
    const isFetching = useSelector<RootStoreType, boolean>(state => state.usersPage.isFetching);

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
