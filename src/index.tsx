import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { statePropsType } from "./types";
import { store } from "./redux/redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
