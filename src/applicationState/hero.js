const { getUrl, getImageAssetFromStatic, getVideoAssetFromStatic } = require('./dataHelper');
const { colors } = require('./constants');

module.exports = {
    backgroundImageUrl: getUrl(getImageAssetFromStatic("hero_background_05.jpg")),
    videoSource: getVideoAssetFromStatic("dance.mp4"), 
    navbar: {
        links: {
            fontSize: {
                static: "1em",
                enlarged: "1.2em"
            },
            transitionDuration: "500ms",
            hr: {
                color: colors.pink,
                width: {
                    static: "0%",
                    enlarged: "100%",
                }
            },
            textColor: colors.white,
            textElements: [
                {
                    displayText: "Home",
                    elementId: "#hero"
                },
                // About Us === what we do
                {
                    displayText: "About Us",
                    elementId: "#what-we-do-section",
                },
                //TODO: contact us section not yet exist
                {
                    displayText: "Our Service",
                    elementId: ""
                },
                // {
                //     displayText: "Our Service",
                //     elementId: "#our-service-section"
                // },
                // {
                //     displayText: "Case Studies",
                //     elementID: "#case-studies-section"
                // },
                {
                    displayText: "Our Clients",
                    elementID: "#clients-section"
                },
                // {
                //     displayText: "Testimonials",
                //     elementID: "#testimonials-section"
                // }
            ]
        },
        button: {
            displayText: "CONTACT US",
            backgroundColor: colors.pink,
        },
    },
    content: {
        title: {
            displayText: "ZOE CREATION"
        },
        description: {
            displayText: "We are a story telling based marketing company and our mission is to help your brands grow."
        },
        button: {
            displayText: "VIEW OUR WORK",
            backgroundColor: colors.pink,
        },
        hr: {
            backgroundColor: colors.pink,
        }
    }
}