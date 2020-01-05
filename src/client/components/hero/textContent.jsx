import React, { Component } from 'react';
import PillButton from '../sharedElements/pillButton.jsx';

export default ({title, description, button, hr}) => (
    <div id="hero-content-container">
        <div className="content">
            <div className="title">{title.displayText}</div>
            <hr style={hr.style}/>
            <div className="description">{description.displayText}</div>
            <PillButton {...button}/>
        </div>
    </div>

)
