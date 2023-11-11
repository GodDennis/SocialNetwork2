import React from "react";
import "./App.css";
import Header from "./layouts/Header/Header";
import { MainContent } from "./layouts/MainContent/MainContent";
import { SideBar } from "./layouts/Sidebar/SideBar";
import { BrowserRouter as Router } from "react-router-dom";
import { StorePropsType } from "./store";

type AppPropsType = {
  store: StorePropsType;
};

function App(props: AppPropsType) {
  return (
    <Router>
      <div className="container">
        <div className="App-wrapper">
          <Header />
          <SideBar />
          <MainContent store={props.store} />
        </div>
      </div>
    </Router>
  );
}

export default App;
