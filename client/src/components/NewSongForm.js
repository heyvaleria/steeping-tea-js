import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { object, string, number, date, InferType } from 'yup';

const NewSongForm = () => {

  return (
    <div>
      <h2>Add a song</h2>
      <Formik
        initialValues={{ artist: '', title: '', url: '', duration: 0 }}
        validate={values => {
          const errors = {};
          if (!values.url) {
            errors.url = 'Required';
          } else if (
            !RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?').test(values.url)
          ) {
            errors.url = 'Invalid URL format';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="artist" name="artist" />
            <Field type="title" name="title" />
            <Field type="url" name="url" />
            <ErrorMessage name="url" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )};

export default NewSongForm;
