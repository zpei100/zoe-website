import React, { Component } from 'react';
import HeroContentContainer from './heroContentContainer/heroContentContainer.jsx';
import NavBar from './nav/navBar.jsx';

export default class Hero extends Component {
    constructor() {
        super();
        this.state = {
            navbar: {
                links: [
                    {
                        displayText: "WORK"
                    },
                    {
                        displayText: "AGENCY"
                    },
                    {
                        displayText: "EXPERTISE"
                    },
                    {
                        displayText: "SERVICES"
                    }
                ],
                button: {
                    displayText: "CONTACT US"
                }
            },
            content: {
                title: {
                    displayText: "We Create Memorable Websites That Sell"
                },
                description: {
                    displayText: "We partner with brands like yours to create websites your customers will remember, vastly improve your key metrics, and display your brand with pride."
                },
                button: {
                    displayText: "VIEW OUR WORK"
                }
            }
            
        }
    }
    render() {
        return (
            <div id="hero">
                <NavBar navbar={this.state.navbar} />
                <HeroContentContainer content={this.state.content}/>
            </div>
        )
    }
}
