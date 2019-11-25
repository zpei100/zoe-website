import React, { Component } from 'react';
import TextSection from './textSection.jsx';
import ImageSection from './imageSection.jsx';

export default ({whatWeDo}) => {
    const {textSection, imageSection} = whatWeDo;    

    return (
        <div id="what-we-do-section">
            <TextSection textSection={textSection} />
            <ImageSection imageSection={imageSection} />
        </div>
    )
}
