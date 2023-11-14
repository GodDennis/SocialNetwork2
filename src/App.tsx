import React from "react";
import "./App.css";
import Header from "./layouts/Header/Header";
import { MainContent } from "./layouts/MainContent/MainContent";
import { SideBar } from "./layouts/Sidebar/SideBar";

function App() {
  return (
    <div className="container">
      <div className="App-wrapper">
        <Header />
        <SideBar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
