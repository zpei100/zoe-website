import React from 'react'

export default function clientsLogos({clientsLogos}) {
    return (
        <div className="clients-logos">
            {clientsLogos.map(clientLogo => 
                <div className="image-container">
                    <img src={clientLogo} />
                </div>)}
        </div>
    )
}
