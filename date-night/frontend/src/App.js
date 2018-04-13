import React from 'react';
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
