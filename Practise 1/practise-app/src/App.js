import React, {Component, Fragment} from "react";
import Student from "./Student";
class App extends Component {
  render(){
    return (
       <div>
         <Student name="ashar" roll = {1}/>
         <Student name="malik" roll = {2}/>
         <Student name="owais" roll= {3}/>
       </div>
    )
  }
}

export default App;
