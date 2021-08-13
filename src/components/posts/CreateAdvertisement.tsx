import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getAuth } from "../../redux/selectors";
import * as yup from "yup";
import textError from "../../common/textError";
import { createAdvertisement } from "../../redux/advertisement-Reducer";

type propsType = {};

type onSubmitType = (
  values: {
    shortText: string;
    description: string;
    images: string;
    tags: string;
  },
  onSubmitProps: any
) => void;

export const CreateAdvertisement: React.FC<propsType> = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector(getAuth);
  if (!auth) {
    history.push("/login");
  }

  const initialValues = {
    shortText: "",
    description: "",
    images: "",
    tags: "",
  };

  const validationSchema = yup.object({
    shortText: yup.string().required("Required"),
  });

  const onSubmit: onSubmitType = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(true);
    const tags = values.tags.split()
    dispatch(
      createAdvertisement(
        onSubmitProps,
        values.shortText,
        values.description,
        values.images,
        values.tags
      )
    );
  };

  return (
    <div>
      <div>Create Advertisement</div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <Form id="createAdv" name="createAdv">
              <div>shortText</div>
              <div>
                <Field type="text" id="shortText" name="shortText" />
                <ErrorMessage name="shortText" component={textError} />
              </div>
              <div>description</div>
              <div>
                <Field type="text" id="description" name="description" />
                <ErrorMessage name="description" component={textError} />
              </div>
              <div>images</div>
              <div>
                <Field type="text" id="images" name="images" />
                <ErrorMessage name="images" component={textError} />
              </div>
              <div>tags</div>
              <div>
                <Field type="text" id="tags" name="tags" />
                <ErrorMessage name="tags" component={textError} />
              </div>
              <div>
                <button type="submit" disabled={formik.isSubmitting}>
                  Create
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
