import React from 'react';
import TextContent from './textContent.jsx';
import NavBar from './nav/navBar.jsx';

export default ({hero}) => {
    const {navbar, content, video} = hero;

    return (
        <div id="hero" >
            <video autoPlay muted loop style={video.style}>
                <source src={video.source} type="video/mp4"></source>
            </video>

            <NavBar {...navbar} />
            <TextContent {...content} />
        </div>
    )
}
