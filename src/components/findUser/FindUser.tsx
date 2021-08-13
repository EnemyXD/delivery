import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { getAuth } from "../../redux/selectors";

type propsType = {};

export const FindUser: React.FC<propsType> = (props) => {
  const auth = useSelector(getAuth);
  const history = useHistory();

  if (!auth) {
    history.push("/login");
  }
  return (
    <div>
      <div>
        <NavLink exact to="/find/byemail">
          Find by email
        </NavLink>
      </div>
      <div>
        <NavLink exact to="/find/byname">
          Find by name
        </NavLink>
      </div>
    </div>
  );
};
