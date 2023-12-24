import { Dispatch } from "redux";
import { API } from "../dal/api";
import { SetProfileAuthIDTC } from "./auth-reducer";
import { ThunkDispatchType } from "./redux";

export const appReducer = (
    state: { initialized: boolean } = { initialized: false },

    action: AppActionTypes
) => {
    switch (action.type) {
        case "SET-INITIALIZED": {
            return {
                ...state,
                initialized: action.initialized,
            };
        }
        default:
            return state;
    }
};

export type AppActionTypes = ReturnType<typeof initializedAC>;

const initializedAC = () => {
    return {
        type: "SET-INITIALIZED",
        initialized: true,
    };
};

export const initializedTC = () => async (dispatch: ThunkDispatchType) => {
    await dispatch(SetProfileAuthIDTC());
    dispatch(initializedAC());
};
