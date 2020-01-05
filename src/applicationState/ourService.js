const { getIconAssetFromStatic } = require('./dataHelper');
const { colors } = require('./constants');

const serviceSlot = (iconUrl, titleDisplayText, descriptionDisplayText) => ({
    icon: {
        url: getIconAssetFromStatic(iconUrl),
        style: {
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
            width: "20%",
        }
    },
    title: {
        displayText: titleDisplayText,
        style: {
            fontSize: "1em",
            textAlign: "center",
            color: "black"
        }
    },
    description: {
        displayText: descriptionDisplayText,
        style: {
            fontSize: "0.8em",
            textAlign: "center",
            color: "black" 
        }
    } 
})

module.exports = {
    header: {
        title: {
            displayText: "How can we help?",
            style: {
                fontSize: "2em",
                color: "black",
            }
        },
        description: {
            displayText: "THIS IS A DESCRIPTION",
            style: {
                fontSize: "0.5em",
                color: "black",
            }
        },
    },
    hr: {
        style: {
            backgroundColor: colors.pink,
            width: "100%",
            margin: "3% 0",
        }
    },
     slots: [
        serviceSlot("marketing.svg", "DIGITAL MARKETING", "With the full support from our top ditial experts, we deliver your brand's story in an interactive and powerful way."),
        serviceSlot("marketing.svg", "DIGITAL MARKETING", "With the full support from our top ditial experts, we deliver your brand's story in an interactive and powerful way."),
        serviceSlot("marketing.svg", "DIGITAL MARKETING", "With the full support from our top ditial experts, we deliver your brand's story in an interactive and powerful way."),
        serviceSlot("marketing.svg", "DIGITAL MARKETING", "With the full support from our top ditial experts, we deliver your brand's story in an interactive and powerful way."),
        serviceSlot("marketing.svg", "DIGITAL MARKETING", "With the full support from our top ditial experts, we deliver your brand's story in an interactive and powerful way."),
        serviceSlot("marketing.svg", "DIGITAL MARKETING", "With the full support from our top ditial experts, we deliver your brand's story in an interactive and powerful way."),
    ]
}
