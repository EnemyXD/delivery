import React from "react";
import { NavLink } from "react-router-dom";

type propsType = {};

export const FindUser: React.FC<propsType> = (props) => {
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
