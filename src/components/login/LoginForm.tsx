import { Field, Form, Formik } from "formik";
import React from "react";
import { NavLink } from "react-router-dom";
import { loginThunk } from "../../redux/profile-Reducer";

type propsType = {
  loginThunk: (login: string, pass: string) => any;
};

type onSubmitType = (
  values: {
    login: string;
    pass: string;
  },
  onSubmitProps: any
) => void;

export const LoginForm: React.FC<propsType> = (props) => {
  const initialValues = {
    login: "",
    pass: "",
  };

  const onSubmit: onSubmitType = (values, onSubmitProps): void => {
    props.loginThunk(values.login, values.pass);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(formik) => {
        return (
          <Form id="authorization" name="authorization">
            <div>
              <h1 />
              UserName
            </div>
            <div>
              <Field type="text" id="login" name="login" />
            </div>
            <div>
              <h1 />
              Password
            </div>
            <div>
              <Field type="text" id="pass" name="pass" />
            </div>
            <div>
              <button type="submit">Login</button>
              <NavLink to="/login">Registration</NavLink>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
