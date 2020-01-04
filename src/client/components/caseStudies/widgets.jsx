import React from 'react';
import Widget from './widget.jsx';

export default function widgets({widgets}) {
    return (
        <div className="widgets">
            {widgets.map(({image, title, subtitle}, i) => <Widget image={image} title={title} subtitle={subtitle} key={`widget_${i}`}/>)}
        </div>
    )
}
