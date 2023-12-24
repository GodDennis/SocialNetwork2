import { Dispatch } from "redux";
import { API, ResponseUserType } from "../dal/api";

const initialState = {
    items: [],
    totalCount: 0,
    error: null,
    pageNumber: 1,
    isFetching: true,
};

export const userReducer = (state: stateType = initialState, action: UserActionType): stateType => {
    switch (action.type) {
        case "PUSH-USERS": {
            return {
                ...action.payload.data,
                items: state?.items
                    ? [
                          ...state?.items.map(el => {
                              return { ...el, isDisabled: false };
                          }),
                          ...action.payload.data.items.map(el => {
                              return { ...el, isDisabled: false };
                          }),
                      ]
                    : [
                          ...action.payload.data.items.map(el => {
                              return { ...el, isDisabled: false };
                          }),
                      ],
                pageNumber: action.payload.pageNumber,
                isFetching: false,
            };
        }
        case "CLEANUP": {
            return initialState;
        }
        case "SET-FETCHING-STATUS": {
            return { ...state, isFetching: action.isFetching };
        }
        case "SET-DISABLE-STATUS": {
            return {
                ...state,
                items: state.items.map(el => {
                    return { ...el, isDisabled: action.isDisabled };
                }),
            };
        }

        case "FOLLOW-USER": {
            return {
                ...state,
                items: [
                    ...state.items.map(el =>
                        el.id.toString() === action.userID
                            ? { ...el, followed: action.followed }
                            : el
                    ),
                ],
            };
        }
        case "UNFOLLOW-USER": {
            return {
                ...state,
                items: [
                    ...state.items.map(el =>
                        el.id.toString() === action.userID
                            ? { ...el, followed: action.followed }
                            : el
                    ),
                ],
            };
        }
        default:
            return state;
    }
};

export const setDisableStatusAC = (isDisabled: boolean) => {
    return {
        type: "SET-DISABLE-STATUS",
        isDisabled,
    } as const;
};

export const setFetchingStatusAC = (isFetching: boolean) => {
    return {
        type: "SET-FETCHING-STATUS",
        isFetching,
    } as const;
};

export const pushUsersAC = (data: ResponseUserType, pageNumber: number) => {
    return {
        type: "PUSH-USERS",
        payload: {
            data,
            pageNumber,
        },
    } as const;
};

export const followAC = (userID: string) => {
    return {
        type: "FOLLOW-USER",
        followed: true,
        userID,
    } as const;
};

export const unFollowAC = (userID: string) => {
    return {
        type: "UNFOLLOW-USER",
        followed: false,
        userID,
    } as const;
};

export const cleanupAC = () => {
    return {
        type: "CLEANUP",
    } as const;
};

export const pushUsersTC = (page: number) => async (dispatch: Dispatch) => {
    try {
        const res = await API.getUsers(page);
        dispatch(pushUsersAC(res.data, page + 1));
    } finally {
        dispatch(setFetchingStatusAC(false));
    }
};

export const unFollowTC = (userID: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(setDisableStatusAC(true));
        const res = await API.unFollow(userID);
        if (res.data.resultCode === 0) {
            dispatch(unFollowAC(userID));
        }
    } finally {
        dispatch(setDisableStatusAC(false));
    }
};

export const followTC = (userID: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(setDisableStatusAC(true));
        const res = await API.follow(userID);
        if (res.data.resultCode === 0) {
            dispatch(followAC(userID));
        }
    } finally {
        dispatch(setDisableStatusAC(false));
    }
};

export type userType = {
    name: string;
    id: number;
    uniqueUrlName: null | string;
    photos: { small: null | string; large: null | string };
    status: null | string;
    followed: boolean;
    isDisabled: boolean;
};

export type dataType = {
    items: userType[] | [];
    totalCount: number;
    error: null | string | Error;
};
export type stateType = {
    pageNumber: number;
    isFetching: boolean;
} & dataType;

export type UserActionType =
    | ReturnType<typeof pushUsersAC>
    | ReturnType<typeof cleanupAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setFetchingStatusAC>
    | ReturnType<typeof setDisableStatusAC>;
