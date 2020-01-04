const { getUrl, getImageAssetFromStatic } = require('./dataHelper');
const { colors } = require('./constants');

module.exports = {
    textSection: {
        title: {
            displayText: "About Us"
        },
        subtitle: {
            displayText: "Marketing, branding, design, photography, event planning."
        },
        description: {
            font: {
                size: "0.8em"
            },
            paragraphs: [
                {
                    displayText: "Founded in 2018, Zoe Creation is a strategic marketing development agency that specializes in digital marketing, branding, graphic design, website design, and event planning. Having a responsive, hands-on approach, our team consists of young professionals, dedicated in bringing your creations to the next level." 
                }
            ]
        },
        button: {
            displayText: "WORK WITH US"
        }
    },
    imageSection: {
        imageUrl: getImageAssetFromStatic("what_we_do_background_02.jpg"),
    }
}