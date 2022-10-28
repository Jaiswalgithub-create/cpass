import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/Login";
import SetPassword from "./screens/SetPassword";
// import "./App.css";
import Header from "./components/nav/Header";
import "./i18n";
import {useTranslation} from "react-i18next";
import {availableLanguages} from "./i18n";
import HeaderForLogout from "./components/HeaderForLogout"

const App = () => {
  const {t, i18n} = useTranslation()
  return (
    <>
      <main>
        <HeaderForLogout />
        
          <Routes>
          <Route path="/" element={<HomeScreen/>} />
          {/* <Route exact path={process.env.PUBLIC_URL + "/"} ><HomeScreen/></Route> */}
          <Route path="/login" element={<Login/>} />
          <Route path="/setpassword" element={<SetPassword/>} />
          </Routes>
          </main>
          <h6 className="mode-text">Mode - {process.env.NODE_ENV} user - {process.env.name}</h6>
    </>
  );
};

export default App;