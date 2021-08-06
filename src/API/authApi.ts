import { BaseResponseType, instance } from "./api";

export const authApi = {
  login(login: string, pass: string) {
    return instance
      .post<BaseResponseType<loginResponseDataType>>(`/login`, {
        login,
        pass,
      })
      .then((res) => res.data);
  },
  logout() {
    return instance.post<BaseResponseType>(`/logout`, {}).then((res) => res.data);
  },
};

type loginResponseDataType = {
  login: string;
  email: string;
};
