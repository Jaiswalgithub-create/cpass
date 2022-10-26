import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/Login";
// import "./App.css";
import Header from "./components/nav/Header";
import "./i18n";
import {useTranslation} from "react-i18next";
import {availableLanguages} from "./i18n";

const App = () => {
  const {t, i18n} = useTranslation()
  return (
    // <Provider store={store}>
    // <Router>
      <main>
        <Header />
        <h1>server- {process.env.NODE_ENV} user- {process.env.name}</h1>
          <Routes>
          <Route path="/" element={<HomeScreen/>} />
          {/* <Route exact path={process.env.PUBLIC_URL + "/"} ><HomeScreen/></Route> */}
          <Route path="/login" element={<Login/>} />
          </Routes>
      </main>
    // </Router>
    // </Provider>
  );
};

export default App;