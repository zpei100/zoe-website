import React from 'react'

export default function description({description: {paragraphs}}) {
    return (
        <div className="description">
            {paragraphs.map(({displayText}) => <p>{displayText}</p>)}
        </div>
    )
}
