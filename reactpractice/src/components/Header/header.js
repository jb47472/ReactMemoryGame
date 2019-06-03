import React, { Component } from 'react';
import "./headerStyle.css";

class Header extends Component {

    render() {
        return <div className = "headerContainer">
            <div className = "row">
                <div className = "col-sm-4">
                    <h4 align= "left"> Clicky Game</h4>                
                </div>

                <div className = "col-sm-4">
                    <h4 align= "middle"> {this.props.status}</h4>                
                </div>

                <div className = "col-sm-4">
                    <h4 align= "right"> Score: {this.props.score} | Top Score: {this.props.topScore}</h4>                
                </div>
            </div>
        </div>
        
        
        
        
    }
}

export default Header;
