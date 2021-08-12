import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../../redux/profile-Reducer";
import { getEmail, getLogin } from "../../redux/selectors";

type propsType = {};

export const Profile: React.FC<propsType> = (props) => {
  const login = useSelector(getLogin);
  const email = useSelector(getEmail);

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(logoutThunk());
  };

  return (
    <div>
      <div>PROFILE</div>
      <div>
        <span>Login: {login}</span>
      </div>
      <div>
        <span>E-mail: {email}</span>
      </div>
      <div>
        <button onClick={onSubmit}>Exit</button>
      </div>
    </div>
  );
};
