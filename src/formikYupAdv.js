import React from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikAdv(){
return <> 
        
    <Formik initialValues= {{full_name: "",email: "",password: "",confirm_password: "",designation:""}}
            validationSchema={ Yup.object({
                full_name: Yup.string().min(2, " *Mininum 2 characters").max(15, " *Maximum 15 characters").required(" *Required!"),
                email: Yup.string().email(" *Invalid email format").required(" *Required!"),
                password: Yup.string().min(8, " *Minimum 8 characters").required(" *Required!"),
                // confirm_password: Yup.string().oneOf([Yup.ref(" *password")], " *Password's not match").required(" *Required!")
              })}
              onSubmit= {values => {alert(JSON.stringify(values)); }} 
              >
              {props=>(  //for disabling button

               
              
    <div>
        <h1>New Employee form using Formik as component</h1>
    
    <Form>
        <p>
            <label>Employee Name: </label>
            <Field name="full_name" type="text"></Field>
            <ErrorMessage name="full_name"></ErrorMessage>
        </p>
        <p>
            <label>Employee Email: </label>
            <Field name="email" type="text"></Field>
            <ErrorMessage name="email"></ErrorMessage>
        </p>
        <p>
            <label>Employee Password: </label>
            <Field name="password" type="password"></Field>
            <ErrorMessage name="password"></ErrorMessage>
        </p>
        {/* <p>
            <label>Confirm Password: </label>
            <Field name="confirm_password" type="password"></Field>
            <ErrorMessage name="confirm_password"></ErrorMessage>
        </p> */}
        <p>
            <label>Employee Designation: </label>
            <Field name="designation" as="select" >
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
            </Field>
        </p>
        <button type="submit" disabled={!props.isValid}>Submit</button>
    </Form>
    </div> 
              )}
    </Formik>
   
    </>
}