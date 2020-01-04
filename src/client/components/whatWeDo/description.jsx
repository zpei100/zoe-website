import React from 'react'

export default function description({paragraphs, font}) {
    const paragraphStyle = {
        fontSize: font.size,
    }

    return (
        <div className="description">
            {paragraphs.map(({displayText}) => 
            <p style={paragraphStyle} >
                {displayText}
            </p>)}
        </div>
    )
}
