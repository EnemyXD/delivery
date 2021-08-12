import { Formik, Form, Field } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { findUserByEmail } from "../../redux/profile-Reducer";

type propsType = {};

type onSumbitType = (
  values: {
    email: string;
  },
  onSubmitProps: any
) => void;

export const FindByEmailForm: React.FC<propsType> = (props) => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
  };

  const onSubmit: onSumbitType = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(true);
    dispatch(findUserByEmail(values.email, onSubmitProps));
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(formik) => {
        return (
          <Form id="reg" name="reg">
            <div>
              E-mail
            </div>
            <div>
              <Field type="text" id="email" name="email" />
            </div>
            <div>
              <button type="submit" disabled={formik.isSubmitting}>
                Find
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
