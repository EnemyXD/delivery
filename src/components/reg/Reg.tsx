import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { NavLink } from "react-router-dom";
import textError from "../../common/textError";
import { actions, Registration } from "../../redux/profile-Reducer";
import { getRedirect } from "../../redux/selectors";

type propsType = {};

type onSubmitType = (
  values: {
    login: string;
    email: string;
    pass: string;
    repeatPass: string;
    phone?: string;
  },
  onSubmitProps: any
) => void;

export const Reg: React.FC<propsType> = (props) => {
  const dispathc = useDispatch();
  const initialValues = {
    login: "",
    email: "",
    pass: "",
    repeatPass: "",
    phone: "",
  };

  const onSubmit: onSubmitType = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(true);
    if (values.pass !== values.repeatPass) {
      onSubmitProps.setErrors({
        pass: "Password mismatch",
        repeatPass: "Password mismatch",
      });
      onSubmitProps.setSubmitting(false);
    } else {
      dispathc(
        Registration(
          values.login,
          values.email,
          values.pass,
          onSubmitProps,
          values.phone
        )
      );
    }
  };
  const redirect = useSelector(getRedirect);
  if (redirect) {
    dispathc(actions.RedirectOFF());
    return <Redirect to="/login" />;
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(formik) => {
        return (
          <Form id="reg" name="reg">
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
              E-mail
            </div>
            <div>
              <Field type="text" id="email" name="email" />
              <ErrorMessage name="email" component={textError} />
            </div>
            <div>
              <h1 />
              Contact phone
            </div>
            <div>
              <Field type="password" id="phone" name="phone" />
              <ErrorMessage name="phone" component={textError} />
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
              <h1 />
              Repeat password
            </div>
            <div>
              <Field type="password" id="repeatPass" name="repeatPass" />
              <ErrorMessage name="repeatPass" component={textError} />
            </div>
            <div>
              <button type="submit" disabled={formik.isSubmitting}>
                reg
              </button>
              <NavLink to="/login">Login</NavLink>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
