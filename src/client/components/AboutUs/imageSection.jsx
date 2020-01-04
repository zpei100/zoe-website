import React from 'react'

export default ({imageSection}) => {
    const {imageUrl} = imageSection;
    return (
        <div className="image-section">
            <img src={imageUrl} style={{
                objectFit: "cover",
                height: "100%",
                width: "100%",
            }}/>
        </div>
    )
}
