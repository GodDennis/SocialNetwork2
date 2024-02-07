import { Dispatch } from "redux";
import { API } from "../dal/api";

export const authReducer = (
    state: authReducerStateType = { email: null, id: 0, login: null, isAuth: false },

    action: AuthActionTypes
) => {
    switch (action.type) {
        case "SET-AUTH-ID": {
            {
                return { ...state, ...action.Auth };
            }
        }
        case "SET-IS-AUTH": {
            return {
                ...state,
                isAuth: action.isAuth,
            };
        }
        default:
            return state;
    }
};

export const SetProfileAuthIDAC = (Auth: Omit<authReducerStateType, "isAuth">) => {
    return {
        type: "SET-AUTH-ID",
        Auth,
    } as const;
};

const SetIsAuthAC = (isAuth: boolean) => {
    return {
        type: "SET-IS-AUTH",
        isAuth,
    } as const;
};

export const SetProfileAuthIDTC = () => async (dispatch: Dispatch) => {
    const res = await API.getAuth();
    if (res.data.resultCode === 0) {
        dispatch(SetIsAuthAC(true));
        dispatch(SetProfileAuthIDAC(res.data.data));
    } else {
        dispatch(SetIsAuthAC(false));
    }
    return res;
};

export const logingTC =
    (data: { email: string; password: string }) => async (dispatch: Dispatch) => {
        const res = await API.login({ ...data, rememberMe: true });
        if (res.data.resultCode === 0) {
            dispatch(SetIsAuthAC(true));
        }
    };

export const deleteLoginTc = () => async (dispatch: Dispatch) => {
    const res = await API.deleteLogin();
    if (res.data.resultCode === 0) {
        dispatch(SetIsAuthAC(false));
        dispatch(
            SetProfileAuthIDAC({
                email: null,
                id: 0,
                login: null,
            })
        );
    }
};

export type authReducerStateType = {
    email: string | null;
    id: number | null;
    login: string | null;
    isAuth: boolean;
};

type SetProfileAuthID = ReturnType<typeof SetProfileAuthIDAC>;
type SetIsAuth = ReturnType<typeof SetIsAuthAC>;

export type AuthActionTypes = SetProfileAuthID | SetIsAuth;
