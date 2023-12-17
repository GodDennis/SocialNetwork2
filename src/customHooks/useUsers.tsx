import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useCallback, memo } from "react";
import {
  cleanupAC,
  followAC,
  pushUsersAC,
  unFollowAC,
  userType,
} from "../redux/users-reducer";

import { RootStoreType } from "../redux/redux";
import { follow, getUsers, unFollow } from "../dal/api";

export const useUsers = () => {
  const [isFetching, setFetching] = useState(true);
  const dispatch = useDispatch();
  const users = useSelector<RootStoreType, userType[]>(
    (state) => state.usersPage.items
  );
  const page = useSelector<RootStoreType, number>(
    (state) => state.usersPage.pageNumber
  );

  // получение пользовтелей из БД

  useEffect(() => {
    if (isFetching) {
      getUsers(page)
        .then((res) => {
          dispatch(pushUsersAC(res.data, page + 1));
        })
        .finally(() => setFetching(false));
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
      setFetching(true);
    }
  }, []);

  //--------------------------------

  const followHandler = (userID: string) => {
    follow(userID).then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(followAC(userID));
      }
    });
  };

  const deleteHandler = (userID: string) => {
    unFollow(userID).then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(unFollowAC(userID));
      }
    });
  };

  return { users, followHandler, deleteHandler };
};
