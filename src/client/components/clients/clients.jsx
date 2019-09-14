import React, {Component} from 'react'
import ViewAllButton from '../sharedElements/viewButton.jsx';
import Header from './header.jsx';
import ClientsLogos from './clientsLogos.jsx';

export default class Clients extends Component{
    constructor() {
        super();
        this.state = {
            viewAllButton: {
                displayText: "VIEW ALL"
            },
            header: {
                title: {
                    displayText: "Clients"
                },
                subtitle: {
                    displayText: "FROM START-UPS TO GLOBAL BRANDS"
                }
            },
            clientsLogos: [
                "null",
                "null",
                "null",
                "null",
                "null",
                "null",
                "null",
                "null",
                "null",
                "null",
            ]
        }
    }

    render() {

        return (
            <div id="clients-section">
                <Header 
                    header={this.state.header}                    
                />
                <ClientsLogos clientsLogos={this.state.clientsLogos} />
                <ViewAllButton displayText={this.state.viewAllButton.displayText}/>
            </div>
        )
    }
}

