import React, { Component, useState, useEffect } from "react";

export default function EmployeeComponent(){
  const [employees,setEmployees]=useState([]);

  useEffect(()=>{
    // alert('We are in useEffect function');
    fetch("http://localhost:3000/employees")
      .then(res => res.json())
      .then(
        (result) => {
          setEmployees(result);
        }
      );
  },[]);   //Here we are using [] as second argument for useEffect function,because [] states it must be render only once
          //Otherwise it will go into infinite loop and alert will continiously come
  return(
    <div>
      <h2>Employees Data...</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp=>(
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.first_name}</td>
              <td>{emp.last_name}</td>
              <td>{emp.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
