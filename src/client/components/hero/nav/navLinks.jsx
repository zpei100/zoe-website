import React, { Component } from 'react';
import { scrollToElement } from '../../../../utility/helper';

export default class NavLinks extends Component {
    render() {
        const {textElements}= this.props;
        const linksCount = textElements.length; 

        const navLinksStyle = {
            zIndex: 2
        }

        return (
            <div id="nav-links" style={navLinksStyle}>
                {textElements.map((link, i) => 
                    <NavLink {...link} 
                        {...this.props}
                        minLinkWidth={`${100/linksCount}%`} 
                        key={`link_${i}`}
                    />
                )}
            </div>    
        )
    }
}

class NavLink extends Component {
    constructor(props) {
        super();
        const { hr, fontSize } = props;

        this.state = {
            hrWidth: hr.width.static,
            fontSize: fontSize.static,
        }

        this.enlargeLink = this.enlargeLink.bind(this);
        this.shrinkLink = this.shrinkLink.bind(this);
    }

    enlargeLink() {
        this.setState({
            hrWidth: this.props.hr.width.enlarged,
            fontSize: this.props.fontSize.enlarged,
        })
    }

    shrinkLink() {
        this.setState({
            hrWidth: this.props.hr.width.static,
            fontSize: this.props.fontSize.static,
        })
    }

    render() {
        const {hr, textColor, minLinkWidth, displayText, elementID, transitionDuration} = this.props;
        const {hrWidth, fontSize} = this.state;

        const horizontalRuleStyle = {
            backgroundColor: hr.color,
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
