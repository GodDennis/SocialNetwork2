import React from "react";
import "./App.css";
import Header from "./layouts/Header/Header";
import { MainContent } from "./layouts/MainContent/MainContent";
import { SideBar } from "./layouts/Sidebar/SideBar";

type AppPropsType = {
  store: any;
};

function App(props: AppPropsType) {
  return (
    <div className="container">
      <div className="App-wrapper">
        <Header />
        <SideBar />
        <MainContent store={props.store} />
      </div>
    </div>
  );
}

export default App;
