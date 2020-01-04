import React from 'react'

export default function clientsLogos({clientsLogos}) {
    return (
        <div className="clients-logos">
            {clientsLogos.map((clientLogo, i) => 
                <div 
                    className="image-container"
                    key={`logo_${i}`}
                >
                    <img src={clientLogo} />
                </div>)}
        </div>
    )
}
