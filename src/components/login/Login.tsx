import React from "react";
import { AppStateType, ThunkType } from "../../redux/redux-store";
import { LoginForm } from "./LoginForm";
import { loginThunk } from "../../redux/profile-Reducer";
import { connect } from "react-redux";
import { profileActionType } from "../../redux/profile-Reducer";
import { Redirect } from "react-router";

type OwnPropsType = {};
type MapStatePropsType = {
  auth: boolean;
};
type MapDispatchPropsType = {
  loginThunk: (login: string, pass: string) => any;
};

type propsType = MapStatePropsType & MapDispatchPropsType;

const Login: React.FC<propsType> = (props) => {
  if (props.auth) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <h1>Authorization</h1>
      <LoginForm loginThunk={props.loginThunk}></LoginForm>
    </div>
  );
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    auth: state.profilePage.auth,
  };
};
export default connect<
  MapStatePropsType,
  MapDispatchPropsType,
  OwnPropsType,
  AppStateType
>(mapStateToProps, { loginThunk })(Login);
