import React from 'react'

import Title from './title.jsx';
import Subtitle from './subtitle.jsx';
import Description from './description.jsx';
import ContactButton from './contactButton.jsx';

export default function textSection({textSection: {title, subtitle, description, button}}) {
    return (
        <div className="text-section">
            <div className="text-container">
                <Title title={title} />
                <Subtitle subtitle={subtitle} />
            </div>
            <div className="text-container">
                <Description description={description} />
            </div>
            <div className="text-container">
                <ContactButton button={button} />
            </div>
        </div>
    )
}
