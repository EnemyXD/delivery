import { ResultCodeEnum } from "../API/api";
import { authApi } from "../API/authApi";
import { InferActionsType, ThunkType } from "./redux-store";

let initState = {
  login: "",
  email: "",
  auth: false,
};

type initStateProfileType = typeof initState;

const ProfileReducer = (
  state = initState,
  action: profileActionType
): initStateProfileType => {
  switch (action.type) {
    case "profile/LOGIN": {
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
    default:
      return state;
  }
};

export type profileActionType = InferActionsType<typeof actions>;

const actions = {
  Login: (login: string, email: string) =>
    ({
      type: "profile/LOGIN",
      login,
      email,
    } as const),
  Logout: () =>
    ({
      type: "profile/LOGOUT",
    } as const),
};

export const loginThunk =
  (login: string, pass: string): ThunkType<profileActionType> =>
  async (dispatch) => {
    let response = await authApi.login(login, pass);
    debugger;
    if (response.resultCode === ResultCodeEnum.success) {
      dispatch(actions.Login(response.d.login, response.d.email));
    }
  };

export const logoutThunk =
  (): ThunkType<profileActionType> => async (dispatch) => {
    let response = await authApi.logout();
    if (response.resultCode === ResultCodeEnum.success) {
      dispatch(actions.Logout());
    }
  };

export default ProfileReducer;
