import { BaseResponseType, instance } from "./api";

export const authApi = {
  login(login: string, pass: string) {
    return instance
      .post<BaseResponseType<loginResponseDataType>>(`/login`, {
        username: login,
        password: pass,
      })
      .then((res) => res.data);
  },
  logout() {
    return instance
      .post<BaseResponseType>(`/logout`, {})
      .then((res) => res.data);
  },
  reg(login: string, email: string, pass: string, phone?: string) {
    return instance
      .post<BaseResponseType>("/reg", { login, email, pass, phone })
      .then((res) => res.data);
  },
};

type loginResponseDataType = {
  login: string;
  email: string;
};
