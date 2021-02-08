import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import video from '../src/assets/video.mp4';
import FormsFormik from './formFormik';
import FormsFormikValid from './formFormikValid';
import FormsValidYup from './formValidYup';
import FormikAdv from './formikYupAdv';
import HookState from './useState';
import HookState1 from './useState1';
import HookState2 from './useState2';
import EmployeeComponent from './useEffect';
import DatatablePage from './useEffect1';
import EmployeeComponent1 from './useEffect1';
import EmployeeEffect from './useEffect2';
import UseContextFunc from './useContext'
import UseContextFunc1 from './useContext1';
import CustomHookFunc from './customHook';
// import EmployeeYup from './formValidYup';
import {BrowserRouter, Link, NavLink, Route,Switch} from 'react-router-dom';

// const element = <h1 className='test'>React</h1>;
const element = React.createElement("div",{className:"test"},React.createElement("h1",null,"Some Data"));
// instead of above we can use React.createElement("h1",{className:"test"},"some data")
// React.createElement("div",props,childElements)  -->syntax
ReactDOM.render(element,document.getElementById("root"));

//Functional components
//here we are creating a component to display data,, we are using component in component for reusability
var DisplayEmp = (emp)=>{
  return <div>
    <h3>Using Functional Componets</h3>
    <h1>Employee Dets:</h1> 
    <p> <label>Emp Id:  {emp.Id}</label> </p>
    <p> <label>Emp Name:  {emp.Name}</label> </p>
    <p> <label>Emp Location:  {emp.Location}</label> </p>
    <Department DepName = {emp.DepName} />
  </div>
}
const Department = (dep)=>{
  return <div>
    <p> <label>Department:  {dep.DepName}</label> </p>
  </div>
}
const empcomp = <DisplayEmp Id="100" Name="Dinesh" Location="Bnglr" DepName="UI" />
ReactDOM.render(empcomp,document.getElementById('funccomp'));

//Class components
class Employee extends React.Component{
  constructor(props){
    super(props); //if we want base class then we have to use super and props is const method
    console.log(this.props)
  }
  render(){
    return <div>
      <h3>Using Class Components</h3>
      <h1>Employee Dets:</h1> 
      <p> <label>Emp Id:  {this.props.Id}</label> </p>   */we have to use this.props to get this.props
      <p> <label>Emp Name:  {this.props.Name}</label> </p>
      <Dep DepName = {this.props.DepName} />
    </div>
  }
}
class Dep extends React.Component{  //we will use this component in the above component
  render(){
    return <div>
      <h1>Department Dets:</h1> 
      <p> <label>Emp Department:  {this.props.DepName}</label> </p>   
      
    </div>
  }
}
ReactDOM.render(<Employee Id="69" Name="DP" DepName="IT" />,document.getElementById("classcomp"))

//STATE COMPONENT
class Stat extends React.Component{
  state = {counter:0}   //we are created a object
  clickCount = (res)=>{
    this.setState({counter:this.state.counter+1})    //using set state we are using and changing it
  }
  render(){
    return <div>
      <h1>States::</h1>
      <button onClick={this.clickCount}>Click to get count</button> //calling a function to increase count
      <p>Button clicked <b>{this.state.counter}</b> times</p>  //geting data from variable
    </div>
  }
}
ReactDOM.render(<Stat />,document.getElementById("state"))

//CONTEXT METHOD (exchanging data from one to another component by states)  Parent to child

const empContext = React.createContext();
class App extends React.Component{
  constructor(props){
    super(props);   //super used to get base class elements
    this.state = {Idd:69,   //here state is also builtin 
               Name:"Dinesh"};//created a state var 
  }
 
  dataChange = ()=>{
    this.setState({Idd:20});   //Here we are changing/Updating the state
  } 
  render(){
    return <div><h1>
                    App component (Parent)
                </h1>
                <h4>Emp id using context: {this.state.Idd} </h4>
                <empContext.Provider value = {this.state}>  //Provider and value is builtin
                  <App1></App1>
                </empContext.Provider>
                <p>
                  <button onClick={this.dataChange}>Click to Change data</button>
                </p>
            </div>
  }
}
class App1 extends React.Component{
  static contextType = empContext;   //contextType is builtin
  render(){
    return <div><h1>
                    App1 component (Child1)
                </h1>
                <h4>Emp id using context: {this.context.Idd} </h4> //Context  is builtin
                <App2 />
            </div>
  }
}
class App2 extends React.Component{
  static contextType = empContext;    
  render(){
    return <div><h1>
                    App2 component (Child2)
                </h1>
                <h4>Emp Name using context: {this.context.Name} </h4>
            </div>
  }
}
ReactDOM.render(<App />,document.getElementById('context1'));

//Child to Parent component
const cpContext = React.createContext({
                                        //data:'',
                                       // changeName:()=>{}
})
class Parent extends React.Component{
  constructor(props){
    super(props);
    this.state ={data:{Id:469,Name:"Dinesh"},
                  changeName: this.updateChild   //We calling the function with key
                            //If we assign a key then it will be in state and can be called by child using context
                }
  }
  updateChild = ()=>{this.setState({data:{Name:"Pammi",Id:44}})}
  render(){
      return <div>
        <h2>Parent Component</h2>
        <h2>Name: {this.state.data.Name}, ID: {this.state.data.Id}</h2>
        <cpContext.Provider value = {this.state}>
        <Child />
        </cpContext.Provider>
        
      </div>
}
}
class Child extends React.Component{
  static contextType = cpContext; 
  render(){
    return <div>
      <h2>Child Component</h2>
      <h2>Name in Parent is: {this.context.data.Name}</h2>
      {/* In below step we call a key in state then that key calls a function in parent */}
      <p><button onClick={this.context.changeName}>Click to change data in parent</button></p>
    </div>
  }
}
ReactDOM.render(<Parent />,document.getElementById("contextChildToParent"))

//Display List of employees 

function Employee1(props){  //function called by map to diplay data in table  //props is jus a var
  return <div style = {{border:"2px solid green"}}>
    <p>Employee ID: {props.value.Id}</p>
    <p>Employee Name: {props.value.Name}</p>
    <p>Employee City: {props.value.City}</p>
  </div>
}
function DisplayEmployee(props){    //function maps and displays data
  const emplList = props.employeeList;
  const listEmployee = emplList.map((emp) => <Employee1 value = {emp} />);  // key ={emp.Id}  we add key if there is no stable ids
  return <div>{listEmployee}</div>

}
const employees = [
  {Id:1,Name:"din",City:"Nlr"},{Id:2,Name:"abc",City:"Blr"},{Id:2,Name:"def",City:"Pok"}
  ]
ReactDOM.render(<DisplayEmployee employeeList = {employees} />,document.getElementById("emplList"))

//APIs
class EmployeeApi extends React.Component{
  constructor(props){
    super(props);
    this.state = {empl:[]};
    
}
componentDidMount(){ //we canot directly write fetch, because in class everything will be function
        //In angular we used ngOnInit() here we use componentDidMount()
  fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json())
  .then(result => {console.log(result);this.setState({empl:result})}); 
}
  render(){
    return (
      <div>
        <h3>Employee Details using API</h3>
        <table>
          <thead> <tr> <th>ID</th> <th>FirstName</th> <th>Email</th> </tr> </thead>
          <tbody>
            {this.state.empl.map((emp)=>(
              <tr key={emp.id}> 
              <td>{emp.id}</td> 
              <td>{emp.name}</td> 
              <td>{emp.email}</td> </tr>
            ))}    </tbody>
        </table>
      </div>
    )  }  }


ReactDOM.render(<EmployeeApi />,document.getElementById("reactAPI"))

//USING Refs
class Refs extends React.Component{
  constructor(props){
    super(props);
    this.quantityRef = React.createRef()   //step1
  }
  increment = () => {
    this.quantityRef.current.value++    //step3
  }
  render(){
    //alert("ref started") // without ref every click alert will be called and input becoms readOnly
    return <div>
      Enter Quantity: <input type = "text" ref ={this.quantityRef} />   {/*Step2*/}
      <button onClick={this.increment}>+</button>
    </div>
  }
}
ReactDOM.render(<Refs />,document.getElementById("refs"))

//refs Login focus
class Login extends React.Component{
  constructor(props){
    super(props);
    this.userRef = React.createRef()    //STEP1
  }
  componentDidMount(){
    this.userRef.current.focus()   //STEP3 - using it the form element will be focused 
  }
  render(){
    return <>
      UserName: <input type="text" ref = {this.userRef} /> <br/>   {/*STEP2*/}
      Password: <input type="password" /> <br/>
      <button>Login</button>
    </>
  }
}
ReactDOM.render(<Login />,document.getElementById("refsLogin"))

//refs Pause/Play Video
class RefVideo extends React.Component{
  constructor(props){
    super(props);
    this.videoRef=React.createRef()    //STEP1
  }
playVideo = ()=>{this.videoRef.current.play()}    //STEP3
pauseVideo = ()=>{this.videoRef.current.pause()}
  render() {
    return <div>
      <video ref={this.videoRef} width="300" height="150" controls>   //STEP2
        <source src = {video} type="video/mp4">
        </source>
      </video> <br />
      <button onClick={this.playVideo}>Play</button>
      <button onClick={this.pauseVideo}>Pause</button>
    </div>
  }
};
ReactDOM.render(<RefVideo />,document.getElementById("refsVideo"))

//Component calls from other component and creates focus
class Elevator extends React.Component{
  constructor(props){
    super(props);
    this.elevatorRef = React.createRef()
  }
  render(){
    return <div>
      ElevatorName: <input type = "text" ref = {this.elevatorRef}/> <br/>
      ElevatorSpeed: <input type = "text" />
      <SubElevator refvalue = {this.elevatorRef} />
    </div>
  }
}
class SubElevator extends React.Component{
  constructor(props){
    super(props);
  }
  focusFunc = ()=>{this.props.refvalue.current.focus();}
  render(){
    return <div>
      <p onClick={this.focusFunc}>ElevatorName: <b>Name</b></p>
      <p>ElevatorSpeed: <b>Speed</b></p>
    </div>
  } 
}
ReactDOM.render(<Elevator />,document.getElementById("refsElevator"))

// Forms without Formik
class Forms extends React.Component{
  constructor(props){
    super(props);
    this.state = {employee:{Id:'',Name:'',Location:''}}

  }
  changeHandler = (e)=>{   //STEP2 
    const name = e.target.name;
    const value = e.target.value;
    this.setState({employee:{
      ...this.state.employee,[name]:value}})}  //changes the state to given inp
  submitFunc = (e)=>{alert(JSON.stringify(this.state.employee))}   //displays value in alert
  render(){
    return <React.Fragment>
      <form onSubmit={this.submitFunc}>   {/*Forms is step1*/}
        <h3>Normal Form</h3>
        <label>Employee Id: </label>
        <input type="text" value={this.state.employee.Id} name="Id" onChange={this.changeHandler} /> <br />
        <label>Employee Name: </label>
        <input type="text" value={this.state.employee.Name} name="Name" onChange={this.changeHandler} /> <br />
        <label>Employee Location: </label>
        <input type="text" value={this.state.employee.Location} name="Location" onChange={this.changeHandler} /> <br />
        <input type="submit" value="Submit" />
      </form>
    </React.Fragment>
  }
}
ReactDOM.render(<Forms />,document.getElementById("Forms"))
//Form using Formik without validation
ReactDOM.render(<FormsFormik />,document.getElementById("FormUsingFormik"))
//Formik with normal validation
ReactDOM.render(<FormsFormikValid />,document.getElementById("FormUsingFormikValid"))
//Formik with YUP
ReactDOM.render(<FormsValidYup />,document.getElementById("FormUsingFormikValidWithYep"))
//Here we are using Formik as a component 
//Formik components are Formik,Form,Field, ErrorMessage
ReactDOM.render(<FormikAdv  />,document.getElementById("formikAdv"))

//LIFE CYCLE METHODS
//Check ntc for remaining life cycles
  //Mounting
class Mounting extends React.Component {
  constructor(props) {
    super(props); this.state = {favoritecolor: "red"};
  }
  componentDidMount() {
    setTimeout(() => {//document.getElementById("mount").innerHTML="some data ";
      this.setState({favoritecolor: "yellow"})}, 3000)
  }
  render() {
    return (<>
      <h1>Mounting</h1>
      <h3>Color will change using Mounting {this.state.favoritecolor}</h3>
      <p id="mount"></p>
      </>
    );
  }}
ReactDOM.render(<Mounting />, document.getElementById('mount'));

//UPDATING METHODS
class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  static getDerivedStateFromProps(props, state) {
    return {favoritecolor: props.favcol };
  }
  changeColor = () => {
    this.setState({favoritecolor: "blue"});
  }
  render() {
    return (
      <div>
      <h3>Using updatings {this.state.favoritecolor}</h3>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}
/*
This example has a button that changes the favorite color to blue,
but since the getDerivedStateFromProps() method is called,
the favorite color is still rendered as yellow
(because the method updates the state
with the color from the favcol attribute).
*/
ReactDOM.render(<Update favcol="yellow"/>, document.getElementById('update'));

//shouldComponentUpdate() {  return false;}  the value is false so component didnt ren renders/update

//getsnapshot,compdidupdate
class Update1 extends React.Component {
  constructor(props) {
    super(props); this.state = {favoritecolor: "red"};
  }
  componentDidMount() {
    setTimeout(() => { this.setState({favoritecolor: "yellow"})}, 6000)
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {  //it stores previous states and props
    document.getElementById("div1").innerHTML =
    "Before the update, the favorite was " + prevState.favoritecolor;
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
    "The updated favorite is " + this.state.favoritecolor;
  }
  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );  } }
ReactDOM.render(<Update1 />, document.getElementById('update1'));

//UNMOUNTING
class Unmount extends React.Component {
  constructor(props) {   super(props); this.state = {show: true};  }
  delHeader = () => { this.setState({show: false}); }
  render() {
    let myheader;
    if (this.state.show) { myheader = <UnmountChild />;  };
    return (
      <div>
      {myheader}
      <button type="button" onClick={this.delHeader}>Delete Header</button>
      </div>
    );  }}

class UnmountChild extends React.Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");  }
  render() {
    return ( <h1>Hello World!</h1>
    );  }}
ReactDOM.render(<Unmount />, document.getElementById('unmount'));

//Hooks
//useState
ReactDOM.render(<HookState />, document.getElementById('hookstate')); //Changes single value
ReactDOM.render(<HookState1 />, document.getElementById('hookstate1')); //Changes multiple values
ReactDOM.render(<HookState2 />, document.getElementById('hookstate2')); //Interaction between components
ReactDOM.render(<EmployeeComponent />, document.getElementById('useEffect'));
//After searching its throwing error so coomented
// ReactDOM.render(<EmployeeComponent1 />, document.getElementById('useEffect1'));
//ComponentWillUnmount
ReactDOM.render(<EmployeeEffect />, document.getElementById('useEffect2'));
ReactDOM.render(<UseContextFunc />, document.getElementById('useContext'));
ReactDOM.render(<UseContextFunc1 />, document.getElementById('useContext1'));
ReactDOM.render(<CustomHookFunc />, document.getElementById('customHook'));

//ROUTING
function Invalid(){
  return <h2>COMPONENTNOT Found</h2>
}
function RoutingComp(){
  return<>
        <h2>Routing Component</h2>
        <ul>
          <li><Link to="/">EMP_API</Link></li>     {/*STEP1 */}
          <li><Link to="/formik">FORMIK_ADV</Link></li>
          <li><NavLink to="/formik" activeClassName="testLink">Formik</NavLink></li>
        </ul>
        <Switch>
        <Route exact path="/" component={EmployeeApi}></Route>    {/*Step2,3 */}
        <Route path="/formik" component={FormikAdv}></Route>   {/*Using exact it will become home page */}
        <Route path="/formik" component={FormsFormik}></Route>
        <Route component={Invalid}></Route>   {/*When the path is not found it will be executed */}
        </Switch>   {/*If there is mul comps for same path, it will display all. so we use switch to avoid that */}
        </>
}
ReactDOM.render(<BrowserRouter><RoutingComp /></BrowserRouter>,document.getElementById('routing'));    //STEP4