import React from 'react';
import {useFormik} from 'formik';
function FormsFormik(){
    const formik = useFormik({
        initialValues:{Id:'',Name:'',Location:''},  //it initiates values
        onSubmit:values=>{alert(JSON.stringify(values))}   //it handles onsubmit values
    })

    return <div>
            <h3>Employee form using Formik</h3>
            <form onSubmit={formik.handleSubmit}>   {/*handleSubmit is prebuilt */}
            <p>
                Employee Id: <input type="text" id="Id" value={formik.values.Id} onChange={formik.handleChange}/>
            </p>        {/*formik.values,formik.handleChange is prebuilt */}
            <p>
                Employee Name: <input type="text" id="Name" value={formik.values.Name} onChange={formik.handleChange}/>
            </p>
            <p>
                Employee Location: <input type="text" id="Location" value={formik.values.Location} onChange={formik.handleChange}/>
            </p>
            <p><input type="submit" value = "Submit"/></p>
            </form>
        </div>
 }

 export default FormsFormik;

