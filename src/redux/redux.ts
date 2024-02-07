import { applyMiddleware, combineReducers, createStore } from "redux";
import { ProfileActionTypes, postReducer } from "./profile-reducer";
import { MessageActionTypes, meessageReducer } from "./message-reducer";
import { UserActionType, userReducer } from "./users-reducer";
import { AuthActionTypes, authReducer } from "./auth-reducer";
import thunk, { ThunkDispatch, ThunkAction } from "redux-thunk";
import { useDispatch } from "react-redux";
import { AppActionTypes, appReducer } from "./app-reducer";

const rootReducer = combineReducers({
    profilePage: postReducer,
    messagePage: meessageReducer,
    usersPage: userReducer,
    auth: authReducer,
    app: appReducer,
});
export let store = createStore(rootReducer, applyMiddleware(thunk));

export type RootStoreType = ReturnType<typeof rootReducer>;

export const useAppDispatch = () => useDispatch<ThunkDispatchType>();

type AppActionType =
    | UserActionType
    | ProfileActionTypes
    | AuthActionTypes
    | MessageActionTypes
    | AppActionTypes;

export type ThunkDispatchType = ThunkDispatch<RootStoreType, unknown, AppActionType>;

export type ActionThunkType = ThunkAction<void, RootStoreType, unknown, AppActionType>;

