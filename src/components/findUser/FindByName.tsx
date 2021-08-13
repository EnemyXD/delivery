import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import {
  findUserByEmail,
  findUserByName,
  user,
} from "../../redux/profile-Reducer";
import { getAuth, getFindByEmail, getFindByName } from "../../redux/selectors";

type propsType = {};

type onSumbitType = (
  values: {
    email: string;
  },
  onSubmitProps: any
) => void;

export const FindByName: React.FC<propsType> = React.memo((props) => {
  const auth = useSelector(getAuth);
  const history = useHistory();

  if (!auth) {
    history.push("/login");
  }

  const user: user[] | null = useSelector(getFindByName);

  const dispatch = useDispatch();
  const initialValues = {
    email: "",
  };

  const onSubmit: onSumbitType = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(true);
    dispatch(findUserByName(values.email, onSubmitProps));
  };
  console.log("findByName");
  console.log(user);

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {(formik) => {
          return (
            <Form id="reg" name="reg">
              <div>Name</div>
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
      {user &&
        user?.map((el) => {
          return (
            <div>
              <div>
                <span>Name: {el.username}</span>
              </div>
              <div>
                <span>E mail: {el.email}</span>
              </div>
              <div>
                <span>Phone: {el.contactPhone}</span>
              </div>
            </div>
          );
        })}
    </div>
  );
});
