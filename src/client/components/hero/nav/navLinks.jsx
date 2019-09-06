import React, { Component } from 'react'

export default class NavLinks extends Component {
    render() {
        return (
            <div id="nav-links">
                {this.props.links.map(link => 
                    <NavLink link={link}/>
                )}
            </div>    
        )
    }
}

class NavLink extends Component {
    render() {
        return (
            <div className="nav-link">
                {this.props.link.displayText}
            </div>
        )
    }
}
