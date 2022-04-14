import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const NewSongForm = () => {
  return (
    <div>
      <h2>Add a song</h2>
      <Formik
        initialValues={{ artist: '', title: '', url: '' }}
        validationSchema={Yup.object({
         artist: Yup.string()
           .max(40, 'Must be 40 characters or less')
           .required('Required'),
         title: Yup.string()
           .max(40, 'Must be 40 characters or less')
           .required('Required'),
         url: Yup.string().url('Invalid URL format').required('Required'),
       })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <p>
              <label htmlFor="artist">Artist </label>
              <Field name="artist" type="text" />
              <ErrorMessage name="artist" />
            </p>
            <p>
              <label htmlFor="title">Title </label>
              <Field name="title" type="text" />
              <ErrorMessage name="title" />
            </p>
            <p>
              <label htmlFor="url">Song URL </label>
              <Field name="url" type="text" />
              <ErrorMessage name="url" />
            </p>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )};

export default NewSongForm;
