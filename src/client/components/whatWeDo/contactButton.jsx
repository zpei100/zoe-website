import React from 'react'

export default function contactButton({button: {displayText}}) {
    return (
        <div className="button">
            <button>{displayText}</button> 
        </div>
    )
}
