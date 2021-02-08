import React,{useState} from "react";
function HookState(){
    const [name,changeName]=useState("some");  //If we make state empty then value is also empty  
                                        //name is variable which stores the state data
                                        //changeName is a function which updates state
    function Change (e) 
                    {changeName(e.target.value)}
    // const Change = (e)=>{changeName(e.target.value)}
    return <>
            <h3>HookStateChange for a single change</h3>
            Emp Name: <input type = "text" value={name} onChange={Change} /> <br/> {/*Here Change is a function */}
            Name u entered is: {name}
          </>
}

export default HookState;