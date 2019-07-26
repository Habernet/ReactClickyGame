import React, { Component } from "react";
import "./App.css";
// Import all of your components
import Navbar from "./components/Navbar/navbar";
import Wrapper from "./components/Wrapper/wrapper";
import Container from "./components/Container/container";
import Row from "./components/Row/row";
import Column from "./components/Column/column";
import CharacterCard from "./components/CharacterCard/charactercard";
// Import of your characters
import characters from "./characters";

//Define a function that will shuffle the cards using random
function shuffleCards(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  state = {
    characters: characters,
    currentScore: 0,
    topScore: 0,
    rightOrWrong: "",
    clicked: [] // This will store ID's of clicked elements
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      //User clicked a previously unclicked card
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      // User loses
      this.handleReset();
    }
  };

  handleIncrement = () => {
    //Increment the current score and set it in the state
    const newestScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newestScore,
      rightOrWrong: ""
    });

    // Test to see if the new score is higher than the state's top score, if it is, set the new top score
    if (scoreToUpate => this.state.topScore) {
      this.setState({
        topScore: newestScore
      });
    }

    // If the score is the max, set the rightOrWrong to "You win! Game over!"

    this.handleShuffle();
  };

  // Handle reset function
  // resets the whole state of the app and shuffles
  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore, // keep this the top score
      rightOrWrong: "Wrong!", // If this is being called, its because the user guessed incorrectly
      clicked: [] //Empty clicked array,
    });
    this.handleShuffle();
  };

  //handleshuffle
  // shuffle the array of friends and then use that to set the new state
  handleShuffle = () => {
    //Get a shuffled version of the character cards
    let newDeck = shuffleCards();
    this.setState({
      characters: newDeck
    });
  };

  render() {
    console.log(this.state);
    return (
      <Wrapper>
        <Navbar
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightOrWrong}
        />
        <Container>
          <Row>
            {this.state.characters
              ? this.state.characters.map((character, i) => (
                  <Column key={i}>
                    <CharacterCard>
                      {character.name}
                      name={character.name}
                      image={character.image}
                      value={character.id}
                      handleClick={this.handleClick}
                      handleIncrement={this.handleIncrement}
                      image={character.image}
                    </CharacterCard>
                  </Column>
                ))
              : "No Pokemon!"}
          </Row>
        </Container>
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
