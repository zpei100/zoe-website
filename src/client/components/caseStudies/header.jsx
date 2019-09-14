import React from 'react'
import Title from './title.jsx'
import Subtitle from './subtitle.jsx'

export default function headers({header: {title, subtitle}}) {
    return (
        <div className="header">
            <Title title={title}/>
            <hr />
            <Subtitle subtitle={subtitle}/>
        </div>
    )
}
