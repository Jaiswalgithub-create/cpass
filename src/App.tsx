import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/Login";
import "./App.css";
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
          <Routes>
          <Route path="/" element={<HomeScreen/>} />
          <Route path="/login" element={<Login/>} />
          </Routes>
      </main>
    // </Router>
    // </Provider>
  );
};

export default App;