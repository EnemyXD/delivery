import { connect, useSelector } from "react-redux";
import React from "react";
import { AppStateType } from "../../redux/redux-store";
import { Profile } from "./Profile";
import { Redirect } from "react-router";
import { getAuth } from "../../redux/selectors";

type PropsType = {};

const ProfileContainer: React.FC<PropsType> = (props) => {
  const auth = useSelector(getAuth);

  if (!auth) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <Profile />
    </div>
  );
};

export default ProfileContainer;
