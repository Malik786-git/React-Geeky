import React, {Component, Fragment} from "react";
import Student from "./Student";
class App extends Component {
  render(){
    return (
       <div>
         <Student name = "1"/>
         <Student name = "2"/>
         <Student name = "3"/>
       </div>
    )
  }
}

export default App;
