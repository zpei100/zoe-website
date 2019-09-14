import React from 'react'
import Title from './title.jsx'
import Subtitle from './subtitle.jsx'

export default function widget({title, subtitle, image}) {
    return (
        <div className="widget">
            <img src={image.imageUrl} />
            <div className="text-container">
                <Title title={title} />
                <Subtitle subtitle={subtitle} />
            </div>
        </div>
    )
}

