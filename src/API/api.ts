import axios from "axios";

export enum ResultCodeEnum {
  success = 0,
  error = 1,
}

export type BaseResponseType<D = {}> = {
  resultCode: ResultCodeEnum;
  d: D;
};

export const instance = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:2929",
});
