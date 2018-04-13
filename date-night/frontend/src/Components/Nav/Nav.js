import React from "react";
import "./Nav.css";
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
        <a href="/events" className="navbar-brand">
          Sign Out
        </a>
      </div>
    </div>
  </nav>
);
export default Nav;
