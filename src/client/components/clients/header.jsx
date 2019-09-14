import React from 'react'
import Title from './title.jsx';
import Subtitle from './subtitle.jsx';

export default function header({header: {title, subtitle}}) {
    return (
        <div className="header">
            <Title title={title} />
            <Subtitle subtitle={subtitle} />
        </div>
    )
}
