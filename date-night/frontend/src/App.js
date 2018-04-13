import React from 'react';
import './App.css';
// import Nav from "./Components/Nav";
import Logon from "./Components/Logon"

class App extends React.Component{
  render(){
    return(
    <div className="page">
    this is where we want to display the page
    </div>
    )
  }
}



const App = () => (
  <div>
    <Nav />
    <Logon />
 
  </div>
);
export default App;
