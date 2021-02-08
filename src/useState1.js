import React,{useState} from "react";
function HookState1(){
    const [emp,setEmpData]=useState({Id:'',Location:'',Sal:''});  
    const Change = (e)=>{setEmpData({...emp,[e.target.name]:e.target.value})}
    //If we didnt place spread operator then all the values doesnt change
    //{changeName(e.target.value)} for single value only. so for multiple values we use
        // funcName(spreadOperator,[name]:value)
    return <>
            <h3>HookStateChange for a Multiple Fields change</h3>
            Emp Name: <input type = "text" name="Id" value={emp.Id} onChange={Change} /> <br/> {/*Here Change is a function */}
            Emp Location: <input type = "text" name="Location" value={emp.Location} onChange={Change} /> <br/>
            Emp Sal: <input type = "text" name="Sal" value={emp.Sal} onChange={Change} /> <br/>
            Name u entered is: <b>{emp.Id}</b>, Location: <b>{emp.Location}</b>, Salary: <b>{emp.Sal}</b>
                
          </>
}

export default HookState1;