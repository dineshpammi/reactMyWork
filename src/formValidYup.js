import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function FormsValidYup() {
  const formik = useFormik({
    initialValues: {full_name: "",email: "",password: "",confirm_password: ""
    },
    validationSchema: Yup.object({
      full_name: Yup.string().min(2, "Mininum 2 characters").max(15, "Maximum 15 characters").required("Required!"),
      email: Yup.string().email("Invalid email format").required("Required!"),
      password: Yup.string().min(8, "Minimum 8 characters").required("Required!"),
      confirm_password: Yup.string().oneOf([Yup.ref("password")], "Password's not match").required("Required!")
    }),
    onSubmit: values => {alert(JSON.stringify(values)); }
  });

  return (
    <div>
      <h1>Validation with Formik + Yup</h1>
      <form onSubmit={formik.handleSubmit}>
        <p>
          <label>Full Name</label>
          <input type="text" name="full_name" value={formik.values.full_name} onChange={formik.handleChange}/>
          {formik.errors.full_name && formik.touched.full_name ?
            <span style={{color:'red'}}>{formik.errors.full_name}</span>:null }
        </p>
        <p>
          <label>Email</label>    {/*Instead of value and onchange we can use {...formik.getFieldProps(email)} */}
          <input type="text" name="email" value={formik.values.email} onChange={formik.handleChange}/>
          {formik.errors.email && formik.touched.email ?
            <span style={{color:'red'}}>{formik.errors.email}</span>:null
          }
        </p>
        <p>
          <label>Password</label>
          <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange}/>
          {formik.errors.password && formik.touched.password ?
            <span style={{color:'red'}}>{formik.errors.password}</span>:null}
        </p>
        <p>
          <label>Confirm Password</label>
          <input type="password" name="confirm_password" value={formik.values.confirm_password} onChange={formik.handleChange}/>
          {formik.errors.confirm_password && formik.touched.confirm_password ?
            <span style={{color:'red'}}>{formik.errors.confirm_password}</span>:null}
        </p>
        <p>
          <input type="submit" value="Submit"></input>
        </p>
      </form>
    </div>
  );
}

// import React from 'react';
// import {useFormik} from 'formik';
// import * as yup from 'yup';

// function FormsValidYup(){
//     const formik = useFormik({
//         initialValues:{Id:'',Name:'',Location:'',Email:''},  //it initiates values
//         validationSchema:yup.object({
//             Name:yup.string().max(10,' *Name must be 10 characters').required(' *Enter Name'),
//             Location:yup.string().required("Enter Employee Location"),
//             Email:yup.string().email("Invalid Email Address").required("Enter Mail ID")
//         }),
//         onSubmit:values=>{alert(JSON.stringify(values))}   //it handles onsubmit values
//     });

//     return <div>
//             <h3>Employee form using Formik&Yup</h3>
//             <form onSubmit={formik.handleSubmit}>   {/*handleSubmit is prebuilt */}
//             <p>
//                 Employee Id: <input type="text" id="Id" name="Id" value={formik.values.Id} onChange={formik.handleChange}/>
//             </p>        {/*formik.values,formik.handleChange is prebuilt */}
            
//             <p>
//                 Employee Name: <input type="text" id="Name" name="Name" value={formik.values.Name} onChange={formik.handleChange}/>
//                 {formik.touched.Name && formik.errors.Name? 
//                 <span style={{color:"red"}}> *{formik.errors.Name}</span> : null}
//             </p>
//             <p>
//                 Employee Location: <input type="text" id="Location" name="Location" value={formik.values.Location} onChange={formik.handleChange}/>
//             </p>
//             <p>
//                 Employee Email: <input type="text" id="Email" name="Email" value={formik.values.Email} onChange={formik.handleChange}/>
//             </p>
//             <p><input type="submit" value = "Submit"/></p>
//             </form>
//         </div>
//  }


// export default FormsValidYup