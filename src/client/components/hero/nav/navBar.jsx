import React, { Component } from 'react';
import NavLinks from './navLinks.jsx';
import Logo from './logo.jsx';
import ContactButton from '../../sharedElements/heroButton.jsx';

export default ({navbar: {links, button}}) => (
    <div id="nav-bar">
        <Logo />
        <NavLinks links={links}/>
        <ContactButton button={button} />
    </div>
)