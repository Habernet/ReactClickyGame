import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Wrapper from "./components/Wrapper/wrapper";
import Container from "./components/Container/container";
import Row from "./components/Row/row";
import Column from "./components/Column/column";
// Import all of your components

//Define a function that will shuffle the cards using random

class App extends Component {
  state = {
    // friends,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: []
  };

  // handle click function checks to see if this is clicked, if it is not, increments and sets state to clicked...else handle reset

  //handle increment function gets the new score via the currentScore..sets state to new score
  // Test to see if the new score actually was updated
  // test to see if the max score was reached, set state rightWrong to you win yayy

  // Handle reset function
  // resets the whole state of the app and shuffles

  //handleshuffle
  // shuffle the array of friends and then use that to set the new state

  render() {
    return (
      <Wrapper>
        <Navbar
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}
        />
      </Wrapper>

      // nav
      // container
      // row
      // map through friends =>
      //      col / friend card
    );
  }
}

export default App;
