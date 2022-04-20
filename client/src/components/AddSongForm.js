import React from 'react'
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
// https://formik.org/docs/tutorial
// ^TIL: check this out for more info

const CustomInput = ({ label, ...props }) => {
   // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
   // which we can spread on <input>. We can use field meta to show an error
   // message if the field is invalid and it has been touched (i.e. visited)
   const [field, meta] = useField(props);
   return (
     <>
       <label htmlFor={props.id || props.name}>{label}</label>
       <input className="text-input" {...field} {...props} />
       {meta.touched && meta.error ? (
         <div className="error">{meta.error}</div>
       ) : null}
     </>
   );
 };

const AddSongForm = () => {
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
            fetch('http://localhost:8000/api/v1/songs', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(values, null, 2)
              // ^ JSON.stringify(value, replacer, space)
              // TIL stuff: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
            })
            // .then(data => console.log(data))
            .catch(err => console.log(err.stack))

            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <CustomInput
               label="Artist"
               name="artist"
               type="text"
               placeholder="artist name"
             />
             <CustomInput
                label="Title"
                name="title"
                type="text"
                placeholder="song title"
              />
              <CustomInput
                 label="Song URL"
                 name="url"
                 type="text"
                 placeholder="add a song URL"
               />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )};

export default AddSongForm;
