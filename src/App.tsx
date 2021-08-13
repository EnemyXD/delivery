import React from "react";
import { NavBar } from "./components/navbar/NavBar";
import s from "./App.module.css";
import { Redirect, Route, useHistory, withRouter } from "react-router";
import Login from "./components/login/Login";
import ProfileContainer from "./components/profile/ProfileContainer";
import { useDispatch, useSelector } from "react-redux";
import { actions, getWhoAmI } from "./redux/profile-Reducer";
import { useEffect } from "react";
import { getAuth, getEmail, getInitApp } from "./redux/selectors";
import { Reg } from "./components/reg/Reg";
import { FindUser } from "./components/findUser/FindUser";
import { FindByEmail } from "./components/findUser/FindByEmail";
import { FindByName } from "./components/findUser/FindByName";
import { compose } from "redux";
import { Posts } from "./components/posts/Posts";
import { AllAdvertisement } from "./components/posts/AllAdvertisement";
import { MyAdvertisement } from "./components/posts/MyAdvertisement";
import { CreateAdvertisement } from "./components/posts/CreateAdvertisement";

type propsType = {};

const App: React.FC<propsType> = (props) => {
  const init = useSelector(getInitApp);
  const dispatch = useDispatch();

  if (!init) {
    dispatch(getWhoAmI());
  }

  return (
    <div className={s.MainDiv}>
      <div className={s.Header}>DELIVERY</div>
      <div className={s.AllContent}>
        <NavBar></NavBar>
        <Route exact path="/" component={ProfileContainer} />
        <Route exact path="/finduser" component={FindUser} />
        <Route exact path="/find/byemail" component={FindByEmail} />
        <Route exact path="/find/byname" component={FindByName} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/posts/all" component={AllAdvertisement} />
        <Route exact path="/posts/my" component={MyAdvertisement} />
        <Route exact path="/posts/create" component={CreateAdvertisement} />
        <Route path="/login" component={Login} />
        <Route path="/reg" component={Reg} />
      </div>
    </div>
  );
};

export default compose<React.FC>(withRouter)(App);
