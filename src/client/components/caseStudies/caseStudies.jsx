import React, {Component} from 'react';
import Widgets from './widgets.jsx'
import Header from './header.jsx';
import ViewMoreButton from '../sharedElements/viewButton.jsx';

class Widget {
    constructor({imageUrl, title, subtitle}) {
       this.image = {imageUrl};
       this.title = {displayText: title};
       this.subtitle = {displayText: subtitle}; 
    }
}

export default class CaseStudies extends Component {
    constructor() {
        super();
        this.state = {
            header: {
                subtitle: {
                    displayText: "Featured Case Studies"
                },
                title: {
                    displayText: "SHOPIFY & SHOPIFY PLUS"
                }
            },
            widgets: [
                new Widget({imageUrl: "https://avexpullzone-avexdesigns.netdna-ssl.com/wp-content/uploads/2019/01/FW2018-1-1307x727.jpg", title: "Reem Arca", subtitle: "SHOPIFY DEVELOPMENT & EXPERIENCE DESIGN"}),
                new Widget({imageUrl: "https://avexpullzone-avexdesigns.netdna-ssl.com/wp-content/uploads/2017/10/kith_feature-1307x727.jpg", title: "Kith", subtitle: "HELPING KITH ACHIEVE MASSIVE SUCCESS"}),
                new Widget({imageUrl: "https://avexpullzone-avexdesigns.netdna-ssl.com/wp-content/uploads/2018/03/ONS_Cover-1307x727.jpg", title: "O.N.S", subtitle: "FASHION MEETS TECHNOLOGY & COMMERCE"})
            ]
        }
    }

    render () {
        return (
            <div id="case-studies-section">
                <Header header={this.state.header}/> 
                <Widgets widgets={this.state.widgets} />
                <ViewMoreButton displayText="VIEW ALL CASE STUDIES" />
            </div>
        )
    }
}