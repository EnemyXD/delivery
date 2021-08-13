import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import textError from "../../common/textError";
import { getAllAdvertisement } from "../../redux/advertisement-Reducer";
import {
  getAllAdvertisementSelector,
  getAuth,
  getInitAllAdvertisement,
} from "../../redux/selectors";

type propsType = {};

type onSubmitType = (
  values: {
    find: String;
  },
  onSubmitProps: any
) => void;

export const AllAdvertisement: React.FC<propsType> = () => {
  const history = useHistory();
  const auth = useSelector(getAuth);

  if (!auth) {
    history.push("/login");
  }

  const initAll = useSelector(getInitAllAdvertisement);
  const dispatch = useDispatch();
  const advertisement = useSelector(getAllAdvertisementSelector);
  if (!initAll) {
    dispatch(getAllAdvertisement());
  }

  const initialValues = {
    find: "",
  };

  const onSubmit: onSubmitType = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(true);
    dispatch(getAllAdvertisement());
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {(formik) => {
          return (
            <Form id="all" name="all">
              <Field type="text" id="findFromAll" name="findFromAll" />
              <ErrorMessage name="findFromAll" component={textError} />
              <button type="submit" disabled={formik.isSubmitting}>
                Find
              </button>
            </Form>
          );
        }}
      </Formik>
      {advertisement &&
        advertisement?.map((el) => {
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
              <hr color="black" />
            </div>
          );
        })}
    </div>
  );
};
