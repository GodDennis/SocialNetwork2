import React from "react";
import "./App.css";
import Header from "./layouts/Header/Header";
import { MainContent } from "./layouts/MainContent/MainContent";
import { SideBar } from "./layouts/Sidebar/SideBar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="App-wrapper">
          <Header />
          <SideBar />
          <MainContent />
        </div>
      </div>
    </Router>
  );
}

export default App;
