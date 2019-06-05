import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper/wrapper.js";
import Header from './components/Header/header.js';
import Banner from './components/Banner/banner.js';
import CharacterCard from './components/CharacterCard/character.js';
import characters from "./characters.json";

class App extends Component {

  state = {
    status: "",
    score: 0,
    topScore: 0,
    characters: characters
  };

  shuffle() {
  const { characters } = this;
  let m = characters.length, i;

  while (m) {
    i = Math.floor(Math.random() * m--);

    [characters[m], characters[i]] = [characters[i], characters[m]];
  }

  return this;
}

  render () {
  return (
 
    <div className="App"> 
    <Header status = {this.state.status} score = {this.state.score} topScore = {this.state.topScore}/>
    <Banner/>
       <Wrapper>
      {this.state.characters.map(characters => (
    <CharacterCard
      id={characters.id}
      key={characters.id}
      name={characters.name}
      image={characters.image}
    />
  ))}
  </Wrapper>
  </div>
  
  )};
}
export default App;
