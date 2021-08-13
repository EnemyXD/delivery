import { connect, useSelector } from "react-redux";
import React from "react";
import { AppStateType } from "../../redux/redux-store";
import { Profile } from "./Profile";
import { Redirect, useHistory } from "react-router";
import { getAuth } from "../../redux/selectors";

type PropsType = {};

const ProfileContainer: React.FC<PropsType> = (props) => {
  const auth = useSelector(getAuth);
  const history = useHistory();

  if (!auth) {
    history.push("/login");
  }

  return (
    <div>
      <Profile />
    </div>
  );
};

export default ProfileContainer;
