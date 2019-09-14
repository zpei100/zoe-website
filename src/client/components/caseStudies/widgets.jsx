import React from 'react';
import Widget from './widget.jsx';

export default function widgets({widgets}) {
    return (
        <div className="widgets">
            {widgets.map(({image, title, subtitle}) => <Widget image={image} title={title} subtitle={subtitle} />)}
        </div>
    )
}
