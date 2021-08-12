import React from "react";
import { NavLink } from "react-router-dom";
import s from "./navbar.module.css";

type propsType = {};

export const NavBar: React.FC<propsType> = (props) => {
  return (
    <div className={s.NavBarMain}>
      <div>
        <NavLink
          exact
          className={s.item}
          activeClassName={s.item_active}
          to="/"
        >
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink className={s.item} activeClassName={s.item_active} to="/posts">
          Posts
        </NavLink>
      </div>
      <div>
        <NavLink className={s.item} activeClassName={s.item_active} to="/finduser">
          Find User
        </NavLink>
      </div>
    </div>
  );
};
