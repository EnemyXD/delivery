import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import textError from "../../common/textError";
import { loginThunk } from "../../redux/profile-Reducer";

type propsType = {};

type onSubmitType = (
  values: {
    login: string;
    pass: string;
  },
  onSubmitProps: any
) => void;

export const LoginForm: React.FC<propsType> = (props) => {
  const dispatch = useDispatch();

  const initialValues = {
    login: "",
    pass: "",
  };

  const onSubmit: onSubmitType = (values, onSubmitProps): void => {
    onSubmitProps.setSubmitting(true);
    dispatch(loginThunk(values.login, values.pass, onSubmitProps));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(formik) => {
        return (
          <Form id="authorization" name="authorization">
            <div>
              <h1 />
              Name
            </div>
            <div>
              <Field type="text" id="login" name="login" />
              <ErrorMessage name="login" component={textError} />
            </div>
            <div>
              <h1 />
              Password
            </div>
            <div>
              <Field type="password" id="pass" name="pass" />
              <ErrorMessage name="pass" component={textError} />
            </div>
            <div>
              <button type="submit" disabled={formik.isSubmitting}>
                Login
              </button>
              <NavLink to="/reg">Registration</NavLink>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
