import React from 'react';
import {useFormik} from 'formik';
const validateEmployee = (empData)=>{   //STEP2
    const errors = {};
    if(!empData.Name){errors.Name = "Enter emp name"}
    else if(empData.Name.length>10){errors.Name = "Name must be below 10 characters"}
    if(!empData.Location){errors.Location = "Enter emp Location"}
    else if(empData.Location.length>10){errors.Location = "Name must be below 10 characters"}
    return errors;
    //we can check email also but we have to use regExp to validate it
}
function FormsFormikValid(){
    const formik = useFormik({
        initialValues:{Id:'',Name:'',Location:''},  //it initiates values
        validate:validateEmployee,    //STEP1
        onSubmit:values=>{alert(JSON.stringify(values))}   //it handles onsubmit values
    })

    return <div>
            <h3>Employee form using Formik with Normal Validation</h3>
            <form onSubmit={formik.handleSubmit}>   {/*handleSubmit is prebuilt */}
            <p>
                Employee Id: <input type="text" id="Id" name="Id" value={formik.values.Id} onChange={formik.handleChange}/>
            </p>        {/*formik.values,formik.handleChange is prebuilt */}
            <p>
                Employee Name: 
                <input type="text" id="Name" name="Name" value={formik.values.Name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                {formik.touched.Name && formik.errors.Name? 
                <span style={{color:"red"}}> *{formik.errors.Name}</span> : null} {/*STEP3 */}
            </p>
            <p>
                Employee Location: <input id="Location" name="Location" {...formik.getFieldProps(Location)} />
                {formik.touched.Location && formik.errors.Location? 
                <span style={{color:"red"}}> *{formik.errors.Location}</span> : null}
            </p>
            <p><input type="submit" value = "Submit"/></p>
            </form>
        </div>
 }


export default FormsFormikValid