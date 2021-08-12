import React from "react";
import s from "./error.module.css";

type PropsType = {
  children: (errorMessage: string) => React.ReactNode;
};

const textError: React.ComponentType = (porps) => {
  return <div className={s.error}>{porps.children}</div>;
};

export default textError;
