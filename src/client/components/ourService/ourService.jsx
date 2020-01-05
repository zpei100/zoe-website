import React from 'react'

import Header from './header.jsx';
import Slots from './slots.jsx';

export default ({ourService}) => {
    const {header, slots, hr} = ourService;

    return (
        <div id="our-service-section">
            <Header {...header} />
            <hr style={hr.style} />
            <Slots slots={slots} /> 
        </div>
    )
}
