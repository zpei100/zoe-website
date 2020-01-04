import React from 'react'

export default function subtitle({subtitle: {displayText}}) {
    return (
        <div className="subtitle">
            {displayText} 
        </div>
    )
}
