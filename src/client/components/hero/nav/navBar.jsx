import React, { Component } from 'react';
import NavLinks from './navLinks.jsx';
import Logo from './logo.jsx';
import ButtonContainer from './buttonContainer.jsx';

export default ({navbar: {links, button}}) => (
    <div id="nav-bar">
        <Logo />
        <NavLinks {...links}/>
        <ButtonContainer button={button} />
    </div>
)