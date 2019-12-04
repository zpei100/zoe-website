import React, { Component } from 'react'

export default ({button: {backgroundColor, displayText}}) => {
    const buttonStyle = {
        backgroundColor,
    }

    return (
        <div id="nav-contact-button-container">
            <button className="hero-button" style={buttonStyle}>
                {displayText}
            </button> 
        </div>
    )
}