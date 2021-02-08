
import React, { Component, useState, useEffect } from "react";
export default function EmployeeComponent1(){
  const [employees,setEmployees]=useState([]);
  const [searchText,searchTextState] = useState('')

  useEffect(()=>{
    alert('We are in useEffect function');
    fetch("http://localhost:3000/employees"+searchText)
      .then(res => res.json())
      .then(
        (result) => {
          setEmployees(result);
        }
      );
  },[searchText]);   //whwnever there is a change in search text then compoent will be re rendered
        //the value in [] is called dependency, it may be states or props
  function searchTextFunction (e){searchTextState(e.target.value)}
  return(
    <div>
      <h2>Employees Data...</h2>
      <input type ="text" value={searchText} onChange={searchTextFunction} /> <br/>
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
