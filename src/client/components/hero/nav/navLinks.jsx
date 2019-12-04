import React, { Component } from 'react';
import { scrollToElement } from '../../../../utility/helper';

export default class NavLinks extends Component {
    render() {
        const {textElements, hrColor, textColor}= this.props;
        const linksCount = textElements.length; 

        return (
            <div id="nav-links">
                {textElements.map(link => 
                    <NavLink {...link} 
                        minLinkWidth={`${100/linksCount}%`} 
                        hrColor={hrColor} 
                        textColor={textColor}/>
                )}
            </div>    
        )
    }
}

class NavLink extends Component {
    constructor() {
        super();
        this.fontSizeStatic = "1em";
        this.fontSizeEnlarge = "1.2em";

        this.hrWidthStatic = "0%";
        this.hrWidthEnlarge = "100%";

        this.transitionDuration = "500ms";

        this.state = {
            hrWidth: this.hrWidthStatic,
            fontSize: this.fontSizeStatic,
        }

        this.enlargeLink = this.enlargeLink.bind(this);
        this.shrinkLink = this.shrinkLink.bind(this);
    }

    enlargeLink() {
        this.setState({
            hrWidth: this.hrWidthEnlarge,
            fontSize: this.fontSizeEnlarge
        })
    }

    shrinkLink() {
        this.setState({
            hrWidth: this.hrWidthStatic,
            fontSize: this.fontSizeStatic
        })
    }

    render() {
        const {hrColor, textColor, minLinkWidth, displayText, elementID} = this.props;
        const {hrWidth, fontSize} = this.state;
        const {transitionDuration} = this;

        const horizontalRuleStyle = {
            backgroundColor: hrColor,
            width: hrWidth,
            transitionDuration: transitionDuration,
            border: 0,
            margin: "10px",
        } 

        const linkStyle = {
            cursor: "pointer",
            minWidth: minLinkWidth,
            whiteSpace: "nowrap"
        }

        const displayTextStyle = {
            transitionDuration: transitionDuration,
            fontSize: fontSize,
            color: textColor,
        }

        const displayTextContainerStyle = {
            //need lineheight, so even with text enlarges, container size does not change
            lineHeight: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }

        return (
            <div 
                className="nav-link" 
                style={linkStyle} 
                onClick={() => scrollToElement(elementID)}
                onMouseEnter={this.enlargeLink}
                onMouseLeave={this.shrinkLink}
            >
                <div style={displayTextContainerStyle}>
                    <div style={displayTextStyle}>
                        {displayText}
                    </div>
                    <hr style={horizontalRuleStyle}/>
                </div>
            </div>
        )
    }
}
