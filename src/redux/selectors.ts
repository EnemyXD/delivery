import { createSelector } from "reselect";
import { AppStateType } from "./redux-store";

export const getEmail = (state: AppStateType) => {
  return state.profilePage.email;
};

export const getLogin = (state: AppStateType) => {
  return state.profilePage.login;
};

export const getAuth = (state: AppStateType) => {
  return state.profilePage.auth;
};

export const getRedirect = (state: AppStateType) => {
  return state.profilePage.redirect;
};

export const getFindByEmail = (state: AppStateType) => {
  return state.profilePage.findByEmail;
};

export const getFindByName = (state: AppStateType) => {
  return state.profilePage.findByName;
};
