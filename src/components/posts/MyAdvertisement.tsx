import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import textError from "../../common/textError";
import {
  getAllAdvertisement,
  getMyAdvertisement,
} from "../../redux/advertisement-Reducer";
import {
  getAuth,
  getInitMyAdvertisement,
  getMyAdvertisementSelector,
} from "../../redux/selectors";

type propsType = {};

type onSubmitType = (
  values: {
    find: String;
  },
  onSubmitProps: any
) => void;

export const MyAdvertisement: React.FC<propsType> = () => {
  const history = useHistory();
  const auth = useSelector(getAuth);

  if (!auth) {
    history.push("/login");
  }

  const initMy = useSelector(getInitMyAdvertisement);
  const dispatch = useDispatch();
  const advertisement = useSelector(getMyAdvertisementSelector);
  if (!initMy) {
    dispatch(getMyAdvertisement());
  }
  console.log(initMy);

  const initialValues = {
    find: "",
  };

  const onSubmit: onSubmitType = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(true);
    dispatch(getMyAdvertisement());
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {(formik) => {
          return (
            <Form id="my" name="my">
              <Field type="text" id="findFromMy" name="findFromMy" />
              <ErrorMessage name="findFromAll" component={textError} />
              <button type="submit" disabled={formik.isSubmitting}>
                Find
              </button>
            </Form>
          );
        }}
      </Formik>
      {advertisement &&
        advertisement.map((el) => {
          return (
            <div>
              <div>
                <span>shortText: {el.shortText}</span>
              </div>
              <div>
                <span>description: {el.description} </span>
              </div>
              <div>
                <span>Created: {el.createdAt}</span>
              </div>
              <div>
                <span>Updated: {el.updatedAt}</span>
              </div>
              <div>
                <span>
                  Tags:{" "}
                  {el.tags.map((obj) => {
                    return <span>{obj}, </span>;
                  })}
                </span>
              </div>
              <div>
                <span>userId: {el.userId}</span>
              </div>
            </div>
          );
        })}
    </div>
  );
};
