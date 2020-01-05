import React, { Component } from 'react'

export default ({displayText, style}) => (
    <div id="nav-contact-button-container">
        <button style={style}>
            {displayText}
        </button> 
    </div>
)
