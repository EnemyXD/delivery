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

export const getFindByEmail = (state: AppStateType) => {
  return state.profilePage.findByEmail;
};

export const getFindByName = (state: AppStateType) => {
  return state.profilePage.findByName;
};

export const getInitApp = (state: AppStateType) => {
  return state.profilePage.initApp;
};

export const getInitAllAdvertisement = (state: AppStateType) => {
  return state.advertisement.initAll;
};

export const getInitMyAdvertisement = (state: AppStateType) => {
  return state.advertisement.initMy;
};

export const getAllAdvertisementSelector = (state: AppStateType) => {
  return state.advertisement.allAdvertisement;
};

export const getMyAdvertisementSelector = (state: AppStateType) => {
  return state.advertisement.myAdvertisement;
};

export const getRegistrationSuccess = (state: AppStateType) => {
  return state.profilePage.registrationSuccess;
};
