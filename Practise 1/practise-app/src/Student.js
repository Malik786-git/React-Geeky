import React from "react";
import "./index.css";
import pt from "prop-types";


// class Student extends React.Component {
//     constructor(props){
//          super(props);
//         this.state = {
//             name: this.props.name,
//             roll: this.props.roll
//         }
//     }
    
//     render(){
//         return (
//             <h1 className="student">Student name {this.state.name} and rollNo. is {this.state.roll}</h1>
//         )    
//     }
// }


// const Student = (props)=> {

//     const fun = ()=>{
//         console.log(this, "hello");
//     }

//     return (
//         <button onClick={fun}>click here</button>
//     )
// }


class Student extends React.Component {
    constructor(props){
      super(props);
      this.state = {
          name:this.props.name,
          roll:this.props.roll
      }
      this.fun2 = this.fun2.bind(this);
    }

    fun = ()=>{
        console.log(this, "hello");
    }
    fun2(){
        console.log(this, "world");
    }

    render(){
        return(
            <div>
                <h1>{this.state.name} and {this.state.roll}</h1>
                <button onClick={this.fun}>click here</button>
                <button onClick={this.fun2}>click here</button>
            </div>
        )
    }
}



export default Student;
