import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./Components/Nav";
import Logon from "./Components/Logon";
import DollarDates from "./Components/DollarDates/DollarDates";
import HelloTest from "./Components/HelloTest/HelloTest"

const App = () => (
  <div>
    <Nav />
    <Logon />
    <DollarDates />
    <DollarDates />
    <HelloTest />
  </div>

  
);
export default App;
