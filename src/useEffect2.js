import React, { Component, useState, useEffect } from "react";
import ReactDOM from 'react-dom';

export default function EmployeeEffect(){
    const [count,setCount] = useState(0);     //step1
    useEffect(()=>{var interval = setInterval(getEmpCount(),3000);   //step3
                    return ()=>{clearInterval(interval)}      //Step6//without this step interval will not clear
                    //and popups after we calls new component also. so we done this,its called componentWillUnmount method               
    })  
    
    function getEmpCount(){    //step2
        alert("setInterval");
        fetch("http://localhost:3000/employees")
      .then(res => res.json())
      .then((result) => {setCount(result.length);});    
    }
    function willUnmountFunc(){             //step5
        ReactDOM.render(<WillUnmount />,document.getElementById('useEffect2'))
    }
    function WillUnmount(){             //step4
        return <h2>Component after button click and previous one will unmount</h2>
    }
    return <>
            <h3>Emps Count is {count}</h3>
            <button onClick={willUnmountFunc}>Click to unmount this component</button>
            </>

}
