import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header.js';
import Banner from './components/Banner/banner.js';

class App extends Component {

  state = {
    status: "",
    score: 0,
    topScore: 0,
  };

  render () {
  return (
    <div className="App"> 
    <Header status = {this.state.status} score = {this.state.score} topScore = {this.state.topScore}/>
    <Banner/>
    </div>
  );
}
}
export default App;
