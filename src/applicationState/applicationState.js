const Widget = require('./dataClasses/Widget');
const Text = require('./dataClasses/Text');
const { getImageAssetFromStatic } = require('./dataHelper');

const hero = require('./hero');
const aboutUs = require('./aboutUs');

module.exports = {
    caseStudies: {
        header: {
            subtitle: new Text("Featured Case Studies"),
            title: new Text("") ,
        },
        widgets: [
            new Widget({
                imageUrl: getImageAssetFromStatic("widget_background_04.jpg"), 
                title: new Text("Marketing"),
                subtitle: new Widget("HELP YOU GET YOUR BRAND PUBLIC")
            }),
            new Widget({
                imageUrl: getImageAssetFromStatic("widget_background_04.jpg"), 
                title: new Text("Design"),
                subtitle: new Text("DESIGN YOUR COMPANY'S BRAND AND LOGO"),
            }),
            new Widget({
                imageUrl: getImageAssetFromStatic("widget_background_04.jpg"), 
                title: new Text("Events") ,
                subtitle: new Text("PLAN YOUR EVENTS") 
            })
        ],
        viewMoreButtonDisplayText: "VIEW ALL CASE STUDIES"
    },
    hero, 
    aboutUs,
    clients: {
        viewAllButton: {
            displayText: "VIEW ALL"
        },
        header: {
            title: {
                displayText: "Clients"
            },
            subtitle: {
                displayText: ""
            }
        },
        clientsLogos: [
            getImageAssetFromStatic("logo_01.jpg"),
            getImageAssetFromStatic("logo_01.jpg"),
            getImageAssetFromStatic("logo_01.jpg"),
            getImageAssetFromStatic("logo_01.jpg"),
            getImageAssetFromStatic("logo_01.jpg"),
            getImageAssetFromStatic("logo_01.jpg"),
            getImageAssetFromStatic("logo_01.jpg"),
            getImageAssetFromStatic("logo_01.jpg"),
            getImageAssetFromStatic("logo_01.jpg"),
            getImageAssetFromStatic("logo_01.jpg"),
        ]
    },
   
}

