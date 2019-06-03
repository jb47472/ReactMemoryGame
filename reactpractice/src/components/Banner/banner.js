import React, { Component } from 'react';
import "./bannerStyle.css";

class Banner extends Component {

    render() {
        return <div className = "bannerContainer">
            
                <h5 align = "middle">
                Clicky Game!
                </h5>

                 <h3 align = "middle">
                Click an image to earn points, but don't use the same image more than once!
                </h3>
            
        </div>
        
    }
}

export default Banner;
        
        
        