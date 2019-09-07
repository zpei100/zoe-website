import React, { Component } from 'react';
import TextSection from './textSection.jsx';
import ImageSection from './imageSection.jsx';

export default class whatWeDo extends Component {
    constructor() {
        super();
        this.state = {
            textSection: {
                title: {
                    displayText: "What We Do"
                },
                subtitle: {
                    displayText: "ECOMMERCE DESIGN, DEVELOPMENT, MARKETING & OPTIMIZATION FOR D2C BRANDS."
                },
                description: {
                    paragraphs: [
                        {
                            displayText: "Avex takes a brand-first approach to ecommerce. From design and development to growth marketing and content, we use our expertise to provide an amazing experience that elevates your brand as a whole. As a Shopify Plus Partner, we help ambitious brands achieve unrivaled growth. Through stylish UI designs, mobile-first websites, and bespoke Shopify integrations, we build more than websites. We build brand experiences." 
                        },
                        {
                            displayText: "We use our growth marketing strategies to drive the right kind of traffic to your store, while converting visitors into repeat customers and brand loyalists. As paid social and search experts, our marketing mix involves Klaviyo, Facebook, Instagram and Google Ads. By focusing on retention, engagement, brand building and retargeting, our goal is to build brand awareness and engagement through meaningful experiences at every digital touch point."
                        }
                    ]
                },
                button: {
                    displayText: "WORK WITH US"
                }
            },
            imageSection: {
                imageUrl: ""
            }
        }
    }

    render() {
        return (
            <div id="what-we-do-section">
                <TextSection textSection={this.state.textSection} />
                <ImageSection />
            </div>
        )
    }
}
