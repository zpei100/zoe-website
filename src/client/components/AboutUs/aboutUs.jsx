import React, { Component } from 'react';
import TextSection from './textSection.jsx';
import ImageSection from './imageSection.jsx';

export default ({aboutUs}) => {
    const {textSection, imageSection} = aboutUs;    

    return (
        <div id="about-us-section">
            <TextSection textSection={textSection} />
            <ImageSection imageSection={imageSection} />
        </div>
    )
}