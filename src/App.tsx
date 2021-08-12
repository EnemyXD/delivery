import React from "react";
import { NavBar } from "./components/navbar/NavBar";
import s from "./App.module.css";
import { Redirect, Route } from "react-router";
import Login from "./components/login/Login";
import ProfileContainer from "./components/profile/ProfileContainer";
import { useDispatch, useSelector } from "react-redux";
import { actions, getWhoAmI } from "./redux/profile-Reducer";
import { useEffect } from "react";
import { getAuth, getRedirect } from "./redux/selectors";
import { Reg } from "./components/reg/Reg";
import { FindUser } from "./components/findUser/FindUser";
import { FindByEmail } from "./components/findUser/FindByEmail";
import { FindByName } from "./components/findUser/FindByName";

type propsType = {};

export const App: React.FC<propsType> = (props) => {
  return (
    <div className={s.MainDiv}>
      <div className={s.Header}>DELIVERY</div>
      <div className={s.AllContent}>
        <NavBar></NavBar>
        <Route exact path="/" component={ProfileContainer} />
        <Route exact path="/finduser" component={FindUser} />
        <Route exact path="/find/byemail" component={FindByEmail} />
        <Route exact path="/find/byname" component={FindByName} />
        <Route path="/login" component={Login} />
        <Route path="/reg" component={Reg} />
      </div>
    </div>
  );
};
