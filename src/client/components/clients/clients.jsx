import React, {Component} from 'react'
import ViewAllButton from '../sharedElements/viewButton.jsx';
import Header from './header.jsx';
import ClientsLogos from './clientsLogos.jsx';

export default ({clients}) => {
    const {header, clientsLogos, viewAllButton: {displayText}} = clients;

    return (
        <div id="clients-section">
            <Header header={header} />
            <ClientsLogos clientsLogos={clientsLogos} />
            <ViewAllButton displayText={displayText}/>
        </div>
    )
    
}

