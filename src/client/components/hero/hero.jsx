import React from 'react';
import HeroContentContainer from './heroContentContainer/heroContentContainer.jsx';
import NavBar from './nav/navBar.jsx';

export default ({hero}) => {
    const {navbar, content, backgroundImageUrl} = hero;
    console.log(backgroundImageUrl);

    const heroBackgroundImageStyle = {backgroundImage: backgroundImageUrl};

    return (
        <div 
            id="hero" 
            style={heroBackgroundImageStyle}
        >
            <NavBar 
                navbar={navbar} 
            />
            <HeroContentContainer 
                content={content} 
            />
        </div>
    )
}
