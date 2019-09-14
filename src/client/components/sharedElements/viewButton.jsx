import React from 'react'

export default function viewButton({displayText}) {
    return (
        <div className="view-button">
            <button>
                {displayText}
            </button> 
        </div>
    )
}
