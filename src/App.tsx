import React from "react";
import "./App.css";
import Header from "./layouts/Header/Header";
import { MainContent } from "./layouts/MainContent/MainContent";
import { SideBar } from "./layouts/Sidebar/SideBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { SetProfileIdAC } from "./redux/profile-reducer";
import { SetProfileAuthIDAC } from "./redux/auth-reducer";
import { useParams } from "react-router-dom";
import { getAuth } from "./dal/api";

function App() {
  
  const dispatch = useDispatch();
  useEffect(() => {
    getAuth().then((res) => {
      dispatch(SetProfileAuthIDAC(res.data.data));
    });
  }, []);

  return (
    <div>
      <Header />
      <div className="section-wrapper">
        <SideBar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
