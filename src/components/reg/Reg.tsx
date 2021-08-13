import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import textError from "../../common/textError";
import * as yup from "yup";
import { getRegistrationSuccess } from "../../redux/selectors";
import { actions, Registration } from "../../redux/profile-Reducer";

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
  const registrationSuccess = useSelector(getRegistrationSuccess);
  const dispatch = useDispatch();
  const history = useHistory();

  if (registrationSuccess) {
    dispatch(actions.regOff);
    history.push("/login");
  }

  const initialValues = {
    login: "",
    email: "",
    pass: "",
    repeatPass: "",
    phone: "",
  };

  const validationSchema = yup.object({
    login: yup.string().required("Required"),
    email: yup.string().required("Required"),
    pass: yup.string().required("Required"),
    repeatPass: yup.string().required("Required"),
  });

  const onSubmit: onSubmitType = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(true);
    if (values.pass !== values.repeatPass) {
      onSubmitProps.setErrors({
        pass: "Password mismatch",
        repeatPass: "Password mismatch",
      });
      onSubmitProps.setSubmitting(false);
    } else {
      dispatch(
        Registration(values.login, values.email, values.pass, values.phone)
      );
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
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
