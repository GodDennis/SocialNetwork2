import { combineReducers, createStore } from "redux";
import { postReducer } from "./profile-reducer";
import { meessageReducer } from "./message-reducer";
import { userReducer } from "./users-reducer";
import { authReducer } from "./auth-reducer";

const rootReducer = combineReducers({
  profilePage: postReducer,
  messagePage: meessageReducer,
  usersPage: userReducer,
  auth: authReducer,
});
export let store = createStore(rootReducer);
export type RootStoreType = ReturnType<typeof rootReducer>;
//store.subscribe(render)
