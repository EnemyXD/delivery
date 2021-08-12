import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { findUserByEmail, user } from "../../redux/profile-Reducer";
import { getAuth, getFindByEmail } from "../../redux/selectors";
import { FindByEmailForm } from "./FindByEmailForm";

type propsType = {};

export const FindByEmail: React.FC<propsType> = () => {
  const user: user | null = useSelector(getFindByEmail);
  const auth = useSelector(getAuth);

  if (!auth) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <FindByEmailForm />
      {user && (
        <div>
          <div>
            <span>Name: {user?.username}</span>
          </div>
          <div>
            <span>Email: {user?.email}</span>
          </div>
          <div>
            <span>Phone: {user?.contactPhone}</span>
          </div>
        </div>
      )}
    </div>
  );
};
