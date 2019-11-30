import React, { Component } from 'react';
import { scrollToElement } from '../../../../utility/helper';

export default class NavLinks extends Component {
    render() {
        const linksCount = this.props.links.length;
        return (
            <div id="nav-links">
                {this.props.links.map(link => 
                    <NavLink link={link} minLinkWidth={`${100/linksCount}%`}/>
                )}
            </div>    
        )
    }
}

class NavLink extends Component {
    constructor() {
        super();
        this.state = {
            hrWidth: "0%",
            fontSize: "100%",
        }
    }

    render() {
        const horizontalRuleStyle = {
            backgroundColor: "red",
            width: this.state.hrWidth,
            position: "absolute",
            bottom: 0,
            transitionDuration: "500ms",
            border: 0,
        } 

        const linkStyle = {
            display: "flex",
            flexDirection: "column",
            position: "relative",
            overflow: "hidden",
            cursor: "pointer",
            minWidth: this.props.minLinkWidth,
            whiteSpace: "nowrap"
        }

        const displayTextStyle = {
            transitionDuration: "500ms",
            fontSize: this.state.fontSize,
        }

        const {displayText, elementID} = this.props.link;
        return (
            <div 
                className="nav-link" 
                style={linkStyle} 
                onClick={() => scrollToElement(elementID)}
                onMouseEnter={() => this.setState({hrWidth: "100%", fontSize: "120%"})}
                onMouseLeave={() => this.setState({hrWidth: "0%", fontSize: "100%"})}
            >
                <span style={displayTextStyle}>{displayText}</span>
                <hr ref={hr => this.hr = hr} style={horizontalRuleStyle}/>
            </div>
        )
    }
}
