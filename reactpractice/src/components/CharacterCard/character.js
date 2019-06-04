import React, { Component } from 'react';
import ReactDOM from "react-dom";
import "./cardStyle.css";
// import App from "./App";

function CharacterCard(props) {
  return (
      <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
        </ul>
        </div>
          <span onClick={() => props.shuffle(props.id)} className="shuffle">
             𝘅
          </span>
    </div>
  );
}
export default CharacterCard;
