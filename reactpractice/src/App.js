import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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

  render () {
  return (
    <div className="App"> 
    <Header status = {this.state.status} score = {this.state.score} topScore = {this.state.topScore}/>
    <Banner/>
      {this.state.characters.map(characters => (

    <CharacterCard
      id={characters.id}
      key={characters.id}
      name={characters.name}
      image={characters.image}
    />
  ))}
  </div>
  )};
}
export default App;
