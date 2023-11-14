import { combineReducers, createStore } from "redux";
import { postReducer } from "./post-reducer";
import { meessageReducer } from "./message-reducer";


const rootReducer = combineReducers({ profilePage: postReducer, messagePage: meessageReducer });
export let store = createStore(rootReducer);

//store.subscribe(render)