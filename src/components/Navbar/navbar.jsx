import React, { Component } from "react";

const Navbar = props => (
  <nav className="navbar navbar-dark bg-dark">
    <h1>Pokemon Memory Game!</h1>
    <h3>{props.rightWrong}</h3>
    <h3>Current Score: {props.score}</h3>
    <h3>Top score: {props.topScore}</h3>
  </nav>
);

export default Navbar;
