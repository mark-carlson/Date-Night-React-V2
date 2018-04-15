import React from "react";
import "./Nav.css";
<<<<<<< HEAD
import  Logon  from "../Logon/Logon"
import { logout } from "../../utils/storage";



const Nav = () => (
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <a href="/movienight" className="navbar-brand">
          Dinner & Movie
        </a>
        <span className="navbar-brand">|</span>
        <a href="/wheel" className="navbar-brand">
          Spin the Wheel
        </a>
        <span className="navbar-brand">|</span>
        <a href="/dollardates" className="navbar-brand">
          Dollar Dates
        </a>
        <span className="navbar-brand">|</span>
        <a href="/" onClick={Logon.logout} className="navbar-brand">
          Sign Out
        </a>
      </div>
=======
import Logon from "../Logon/Logon.js"

console.log(Logon.constructor())

const Nav = () => (
  <nav>
    <div class="nav-wrapper">
      <a href="/homepage" class="brand-logo"><img src= "../../../img/logo.png" /></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="/movienight">Dinner & Movie</a></li>
        <li><a href="/wheel">Spin the Wheel</a></li>
        <li><a href="/dollardates">Dollar Dates</a></li>
        <li><a href="/">Sign Out</a></li>
      </ul>
>>>>>>> 9167762f865013a697754404faa58c8e5624cb11
    </div>
  </nav>



  // <nav className="navbar navbar-inverse navbar-top">
  //   <div className="container-fluid">
  //     <div className="navbar-header">
        // <a href="/movienight" className="navbar-brand">
        //   Dinner & Movie
        // </a>
        // <span className="navbar-brand">|</span>
        // <a href="/wheel" className="navbar-brand">
        //   Spin the Wheel
        // </a>
        // <span className="navbar-brand">|</span>
        // <a href="/dollardates" className="navbar-brand">
        //   Dollar Dates
        // </a>
        // <span className="navbar-brand">|</span>
        // <a href="/events" className="navbar-brand">
        //   Sign Out
        // </a>
  //     </div>
  //   </div>
  // </nav>
);
export default Nav;
