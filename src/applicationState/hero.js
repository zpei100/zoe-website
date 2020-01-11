const { getVideoAssetFromStatic } = require('./dataHelper');
const { colors } = require('./constants');

// const VIDEO_SOURCE = "dance.mp4";
const VIDEO_SOURCE = "";

const buttonStyle = {
    borderRadius: "20px",
    padding: "10px 25px",
    fontSize: "0.9em",
    backgroundColor: colors.pink,
    whiteSpace: "nowrap",
    fontWeight: 600,
    color: "white",
    borderColor: "transparent",
}

module.exports = {
    video: {
        source: getVideoAssetFromStatic(VIDEO_SOURCE),  
        style: {
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            position: "absolute",
            opacity: "30%"
        }
    },
    navbar: {
        links: {
            transitionDuration: "500ms",
            textColor: colors.white,

            fontSize: {
                static: "1.4em",
                enlarged: "2em"
            },
            textElements: [
                {
                    displayText: "Home",
                    elementId: "#hero"
                },
                {
                    displayText: "About Us",
                    elementId: "#what-we-do-section",
                },
                {
                    displayText: "Our Service",
                    elementId: ""
                },
                {
                    displayText: "Our Clients",
                    elementID: "#clients-section"
                },
            ]
        },
        
        button: {
            displayText: "CONTACT US",
            style: {...buttonStyle},
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
            style: {...buttonStyle}
        },
        hr: {
            backgroundColor: colors.pink,
            style: {
                backgroundColor: colors.pink,
                height: "3px",
            }
        }
    }
}