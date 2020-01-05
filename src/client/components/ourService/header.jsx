import React from 'react';

export default ({title, description}) => {
    const style = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }
    return (
        <div style={style}>
            <p style={title.style}>
                {title.displayText}
            </p>

            <p style={description.style}>
                {description.displayText}
            </p>
        </div>
    )
}