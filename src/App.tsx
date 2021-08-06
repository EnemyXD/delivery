import React from "react";
import { NavBar } from "./components/navbar/NavBar";
import s from "./App.module.css";
import { Route } from "react-router";
import { Profile } from "./components/profile/Profile";
import Login from "./components/login/Login";

type propsType = {};

export const App: React.FC<propsType> = (propr) => {
  return (
    <div className={s.MainDiv}>
      <div className={s.Header}>DELIVERY</div>
      <div className={s.AllContent}>
        <NavBar></NavBar>
        <Route exact path="/">
          <Profile />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </div>
    </div>
  );
};
