import ReactDOM from "react-dom";
import React, { Component, useState, useContext } from "react";

const employeeContext=React.createContext();

export default function UseContextFunc1(){
  const [employee,setEmployee]=useState({Id:101,Name:'Pragim',Type:'Contract',
                                Location:'Bangalore',Salary:12345, EmploymentType:'Contract'});
  return(
    <div>
      <h2>Welcome to App Component...</h2>
      <p><label>Employee Salary : <b>{employee.Salary}</b></label> </p>
      <employeeContext.Provider value={{data:employee,updateEmployee:setEmployee}}>
          <Employee></Employee>
      </employeeContext.Provider>           
    </div>
  );
}

function Employee(){
  let context=useContext(employeeContext);
  function changeEmploymentType(){
    context.updateEmployee({...context.data,EmploymentType:'Permanent'});
  }
  return(
    <div>
      <h2>Welcome to Employee Component...</h2>
      <p>  <label>Employee ID : <b>{context.data.Id}</b></label>    </p>
      <p>  <label>Employee Name : <b>{context.data.Name}</b></label>   </p>  
      <p>  <label>Employee Salary : <b>{context.data.Salary}</b></label> </p>    
      <employeeContext.Consumer>
        {value=>value.data.EmploymentType==='Permanent'?
              <Permanent></Permanent>:<Contract></Contract>}
      </employeeContext.Consumer>
      <button onClick={changeEmploymentType}>Make Permanent</button>
      <Salary></Salary>
    </div>
  );
}
function Salary(){
  let context=useContext(employeeContext);

  function updateSalary(){
    context.updateEmployee({...context.data,Salary:15000});
  }
  return(
    <div>
      <h2>Welcome to Salary Component...</h2>
      <p>
        <label>Employee ID : <b>{context.data.Id}</b></label>
      </p>
      <p>
        <label>Employee Salary : <b>{context.data.Salary}</b></label>
      </p>
      <button onClick={updateSalary}>Update</button>
    </div>
  );
}

function Permanent(){
  return (
    <div>
      <h2>Permanent Component Contents...</h2>
    </div>
  );
}

function Contract(){
  return(
    <div>
      <h2>Contract Component Contents...</h2>
    </div>
  )
}


