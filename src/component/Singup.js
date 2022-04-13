import React from 'react'
import { Formik , Form } from 'formik'
import TextFeild from './TextFeild'
import * as Yup from 'yup'

export default function Signup() {
    const validate = Yup.object({
        firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
        lastName: Yup.string()
        .max(15, 'Must be 20 characters or less')
        .required('Required'),
        email: Yup.string()
        .email('Email is invaild')
        .required('Email is Requried'),
        password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
        confirmPassword: Yup.string()
        .oneOf([Yup.ref('password') , null], 'Password must match')
        .required('Confirm password is required'),
    })
  return (
    <Formik initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
     }}
        validationSchema = {validate}
        onSubmit = {values => {
            console.log(values);
        }}
     >
         {formik => (
             <div>
                 <h1 className="my-4 fw-bold">Sign Up</h1>
                 <Form>
                     <TextFeild label="First Name" name="firstName" type="text" />
                     <TextFeild label="Last Name" name="lastName" type="text" />
                     <TextFeild label="Email" name="email" type="email" />
                     <TextFeild label="Password" name="password" type="password" />
                     <TextFeild label="Confirm Password" name="confirmPassword" type="password" />
                     <button className="btn btn-dark mt-3">Register</button>
                     <button className="btn btn-danger mt-3 ms-3">Reset</button>
                 </Form>
             </div>
         )}

    </Formik>
  )
}
