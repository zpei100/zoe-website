import React, { Component } from 'react';
import NavLinks from './navLinks.jsx';
import ContactButton from '../../sharedElements/pillButton.jsx';

export default ({links, button}) => (
    <div id="nav-bar">
        <div className="logo-container"></div>
        <NavLinks {...links}/>
        <div className="button-container">
            <ContactButton {...button} />
        </div>
    </div>
)