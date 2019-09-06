import React, { Component } from 'react';
import HeroDescription from './description.jsx';
import HeroTitle from './title.jsx';
import HeroButton from '../../sharedElements/heroButton.jsx';

export default ({content: {title, description, button}}) => (
    <div id="hero-content">
        <HeroTitle title={title}/>
        <hr id="hero-horizontal-rule" />
        <HeroDescription description={description}/>
        <HeroButton button={button}/>
    </div>
)
