import { string } from "joi";
import { user } from "../redux/profile-Reducer";
import { BaseResponseType, instance } from "./api";

export const profileApi = {
  getWhoAmI() {
    return instance
      .get<BaseResponseType<loginResponseDataType>>(`/whoami`)
      .then((res) => res.data);
  },
  findByEmail(email: string) {
    return instance
      .post<BaseResponseType<findUserByEmailType>>("/findbyemail", { email })
      .then((res) => res.data);
  },
  findByName(name: string) {
    return instance
      .post<BaseResponseType<findUserByNameType>>("/findbyname", { name })
      .then((res) => res.data);
  },
};

type loginResponseDataType = {
  login: string;
  email: string;
};

type findUserByEmailType = {
  username: string;
  email: string;
  contactPhone: string;
};

type findUserByNameType = {
  user: user[];
};
