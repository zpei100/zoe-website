import React from 'react'

export default function title({title: {displayText}}) {
    return (
        <div className="title">
            {displayText}
        </div>
    )
}
