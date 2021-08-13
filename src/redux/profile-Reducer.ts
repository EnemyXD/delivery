import { ResultCodeEnum } from "../API/api";
import { authApi } from "../API/authApi";
import { profileApi } from "../API/profileApi";
import { InferActionsType, ThunkType } from "./redux-store";

export type user = {
  username: string;
  email: string;
  contactPhone: string;
};

let initState = {
  initApp: false,
  login: "",
  email: "",
  auth: false,
  findByEmail: null as user | null,
  findByName: null as user[] | null,
  registrationSuccess: false,
};

type initStateProfileType = typeof initState;

const ProfileReducer = (
  state = initState,
  action: profileActionType
): initStateProfileType => {
  switch (action.type) {
    case "profile/SetProfileData": {
      return {
        ...state,
        login: action.login,
        email: action.email,
        auth: true,
      };
    }
    case "profile/LOGOUT": {
      return {
        ...state,
        login: "",
        email: "",
        auth: false,
      };
    }
    case "profile/setFindByEmail": {
      return {
        ...state,
        findByEmail: action.user,
      };
    }
    case "profile/setFindByName": {
      return {
        ...state,
        findByName: action.array,
      };
    }
    case "profile/setInit": {
      return {
        ...state,
        initApp: true,
      };
    }
    case "profile/reg": {
      return {
        ...state,
        registrationSuccess: true,
      };
    }
    case "profile/regOff": {
      return {
        ...state,
        registrationSuccess: false,
      };
    }
    default:
      return state;
  }
};

export type profileActionType = InferActionsType<typeof actions>;

export const actions = {
  SetProfileData: (login: string, email: string) =>
    ({
      type: "profile/SetProfileData",
      login,
      email,
    } as const),
  Logout: () =>
    ({
      type: "profile/LOGOUT",
    } as const),
  setFindByEmail: (user: user) =>
    ({
      type: "profile/setFindByEmail",
      user,
    } as const),
  setFindByName: (array: user[]) =>
    ({
      type: "profile/setFindByName",
      array: array,
    } as const),
  init: () =>
    ({
      type: "profile/setInit",
    } as const),
  reg: () =>
    ({
      type: "profile/reg",
    } as const),
  regOff: () =>
    ({
      type: "profile/regOff",
    } as const),
};

export const loginThunk =
  (
    login: string,
    pass: string,
    onSubmitProps: any
  ): ThunkType<profileActionType> =>
  async (dispatch) => {
    let response = await authApi.login(login, pass);
    console.log(onSubmitProps);
    onSubmitProps.setSubmitting(false);
    if (response.resultCode === ResultCodeEnum.success) {
      dispatch(actions.SetProfileData(response.d.login, response.d.email));
    }
    if (response.resultCode === ResultCodeEnum.error) {
      onSubmitProps.setErrors({
        login: "login or password is wrong",
        pass: "login or password is wrong",
      });
    }
  };

export const logoutThunk =
  (): ThunkType<profileActionType> => async (dispatch) => {
    let response = await authApi.logout();
    if (response.resultCode === ResultCodeEnum.success) {
      dispatch(actions.Logout());
    }
  };

export const getWhoAmI =
  (): ThunkType<profileActionType> => async (dispatch) => {
    let response = await profileApi.getWhoAmI();
    if (response) {
      dispatch(actions.init());
    }
    if (response.resultCode === ResultCodeEnum.success) {
      dispatch(actions.SetProfileData(response.d.login, response.d.email));
    }
  };

export const findUserByEmail =
  (email: string, onSubmitProps: any): ThunkType<profileActionType> =>
  async (dispatch) => {
    let response = await profileApi.findByEmail(email);
    onSubmitProps.setSubmitting(false);
    if (response.resultCode === ResultCodeEnum.success) {
      const user = {
        username: response.d.username,
        email: response.d.email,
        contactPhone: response.d.contactPhone,
      };
      dispatch(actions.setFindByEmail(user));
    }
  };

export const findUserByName =
  (name: string, onSubmitProps: any): ThunkType<profileActionType> =>
  async (dispatch) => {
    let response = await profileApi.findByName(name);
    onSubmitProps.setSubmitting(false);
    if (response.resultCode === ResultCodeEnum.success) {
      const user = response.d.user;
      console.log(user);
      dispatch(actions.setFindByName(user));
    }
  };

export const Registration =
  (
    name: string,
    email: string,
    pass: string,
    phoneNumber?: string
  ): ThunkType<profileActionType> =>
  async (dispatch) => {
    let response = await authApi.reg(name, email, pass, phoneNumber);
    if (response.resultCode === ResultCodeEnum.success) {
      dispatch(actions.reg());
    }
  };
export default ProfileReducer;
