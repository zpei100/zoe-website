import React, { Component } from 'react';
import { scrollToElement } from '../../../../utility/helper';

export default class NavLinks extends Component {
    render() {
        const {textElements}= this.props;

        return (
            <ul id="nav-links">
                {textElements.map((link, i) => 
                    <NavLink {...link} 
                        {...this.props}
                        key={`link_${i}`}
                    />
                )}
            </ul>    
        )
    }
}

class NavLink extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <li
                className="nav-link" 
                onClick={() => scrollToElement(elementID)}
            >
                {this.props.displayText}
            </li>
        )
    }
}
