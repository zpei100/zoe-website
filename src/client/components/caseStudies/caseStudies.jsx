import React, {Component} from 'react';
import Widgets from './widgets.jsx'
import Header from './header.jsx';
import ViewMoreButton from '../sharedElements/viewButton.jsx';

export default ({caseStudies}) => {
    const {header, widgets, viewMoreButtonDisplayText} = caseStudies;

    return (
        <div id="case-studies-section">
            <Header header={header}/> 
            <Widgets widgets={widgets} />
            <ViewMoreButton displayText={viewMoreButtonDisplayText} />
        </div>
    )
}