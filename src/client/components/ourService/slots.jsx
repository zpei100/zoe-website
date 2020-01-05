import React from 'react'

export default ({slots}) => {
    return (
        <div className="slots">
            {slots.map(slot => <Slot {...slot} />)}
        </div>
    )
}

const Slot = ({icon, title, description}) => {
    return (
        <div>
            <img src={icon.url} style={icon.style}/>
            <p style={title.style}>{title.displayText}</p>
            <p style={description.style}>{description.displayText}</p>
        </div>
    )
}