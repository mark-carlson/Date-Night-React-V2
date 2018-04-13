<<<<<<< HEAD
import React, {Component} from 'react';
=======
import React from 'react';
>>>>>>> db42c3d3365990d3ab5cb15e5f23fd79cff6a327
import './App.css';
import Nav from "./Components/Nav";
import Logon from "./Components/Logon"

class App extends React.Component{
  render(){
    return(
    <div className="page">
      <Nav />
      <Logon />
    </div>
    )
  }
}



// const App = () => (
//   <div>
//     <Nav />
//     <Logon />
 
//   </div>
// );
export default App;
