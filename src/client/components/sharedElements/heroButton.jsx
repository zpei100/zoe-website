import React, { Component } from 'react'

export default ({button: {displayText}}) => (
    <div id="nav-contact-button-container">
        <button className="hero-button">
            {displayText}
        </button> 
    </div>
)