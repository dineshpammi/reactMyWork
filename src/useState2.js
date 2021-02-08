import React,{useState} from "react";

// export default function HookState2(){
//     const [employee,setEmployeeData]=useState({Id:'',Name:'',Location:'',Salary:''});    
  
//     function changeEmployeeInfo(e){
//       setEmployeeData({...employee,[e.target.name]:e.target.value});
//     }
  
//     return(
//       <div>
//         <h2>Data interaction between two components using Hooks</h2>
//           Employee ID :
//             <input type="text" name="Id" value={employee.Id} onChange={changeEmployeeInfo} /> <br/>
//           Employee Name : 
//             <input type="text" name="Name" value={employee.Name} onChange={changeEmployeeInfo} /> <br/>
//           Employee Location :
//             <input type="text" name="Location" value={employee.Location} onChange={changeEmployeeInfo} /> <br />
//           Employee Salary : 
//             <input type="text" name="Salary" value={employee.Salary} onChange={changeEmployeeInfo} /> <br />
//           Employee ID is : <b>{employee.Id}</b>, Name is : <b>{employee.Name}</b> ,
//           Location is : <b>{employee.Location}</b> and Salary is : <b>{employee.Salary}</b>

//         <SalaryComponent onSalaryChange={changeEmployeeInfo} salary={employee.Salary} />
//       </div>
//     )
//   }
  
//   const SalaryComponent=({onSalaryChange,salary})=>{
//     return(
//       <div style={{border:'3px solid red', width:'500px'}}>
//       <h2>Welcome to Salary Component</h2>
//       <p>Employee Salary : 
//         <input type="text" name="Salary" value={salary} onChange={onSalaryChange} />
//       </p>
//       </div>
//     );
//   }
function HookState2(){
    const [emp,setEmpData]=useState({Id:'',Location:'',Sal:''});  
    function Change (e)
                    {setEmpData({...emp,[e.target.name]:e.target.value})}
    
    return <>
            <h3>HookStateChange for a Multiple Fields change & Component Interaction</h3>
            Emp Name: <input type = "text" name="Id" value={emp.Id} onChange={Change} /> <br/> {/*Here Change is a function */}
            Emp Location: <input type = "text" name="Location" value={emp.Location} onChange={Change} /> <br/>
            Emp Sal: <input type = "text" name="Sal" value={emp.Sal} onChange={Change} /> <br/>
            Name u entered is: <b>{emp.Id}</b>, Location: <b>{emp.Location}</b>, Salary: <b>{emp.Sal}</b>
            <Child salary={emp.Sal} onSalChange={Change}/>
          </>
}
function Child({salary,onSalChange}) {
    return <div><h3>Child Component will change the Sal in parent Component</h3> 
                Emp Sal: <input type = "text" name="Sal" value={salary} onChange={onSalChange} />
    </div>
}
export default HookState2;