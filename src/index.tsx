import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { statePropsType, store } from "./store";

const rerender = (state: statePropsType) => {
  ReactDOM.render(<App store={store} />, document.getElementById("root"));
};

rerender(store.getState());

store.subscribe(rerender);
