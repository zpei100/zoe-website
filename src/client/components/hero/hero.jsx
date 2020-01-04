import React from 'react';
import HeroContentContainer from './heroContentContainer/heroContentContainer.jsx';
import NavBar from './nav/navBar.jsx';
import { Player } from 'video-react';

export default ({hero}) => {
    const {navbar, content, backgroundImageUrl, videoSource} = hero;

    const heroBackgroundImageStyle = {backgroundImage: backgroundImageUrl};

    return (
        <div 
            id="hero" 
        >
            <video autoPlay muted loop id="hero-video"
            style={{
                width: "100vw",
                height: "100vh",
                objectFit: "cover",
                position: "absolute",
                opacity: "30%"
            }}>
                <source src={videoSource} type="video/mp4"></source>
            </video>
            <NavBar navbar={navbar} />
            <HeroContentContainer 
                content={content} 
            />
        </div>
    )
}
