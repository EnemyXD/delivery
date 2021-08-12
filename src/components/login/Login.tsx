import React from "react";
import { AppStateType, ThunkType } from "../../redux/redux-store";
import { LoginForm } from "./LoginForm";
import { loginThunk } from "../../redux/profile-Reducer";
import { connect, useSelector } from "react-redux";
import { profileActionType } from "../../redux/profile-Reducer";
import { Redirect } from "react-router";
import { getAuth } from "../../redux/selectors";

type propsType = {};

const Login: React.FC<propsType> = (props) => {
  const auth = useSelector(getAuth);

  if (auth) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <h1>Authorization</h1>
      <LoginForm></LoginForm>
    </div>
  );
};
export default Login;
