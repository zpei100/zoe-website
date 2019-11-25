const Widget = require('./dataClasses/Widget');
const Text = require('./dataClasses/Text');
const { getUrl, getAssetFromStatic } = require('./utility/helper');

module.exports = {
    caseStudies: {
        header: {
            subtitle: new Text("Featured Case Studies"),
            title: new Text("SHOPIFY & SHOPIFY PLUS") ,
        },
        widgets: [
            new Widget({
                imageUrl: getAssetFromStatic("widget_background_04.jpg"), 
                title: new Text("Reem Arca"),
                subtitle: new Widget("SHOPIFY DEVELOPMENT & EXPERIENCE DESIGN")
            }),
            new Widget({
                imageUrl: getAssetFromStatic("widget_background_04.jpg"), 
                title: new Text("Kith"),
                subtitle: new Text("HELPING KITH ACHIEVE MASSIVE SUCCESS"),
            }),
            new Widget({
                imageUrl: getAssetFromStatic("widget_background_04.jpg"), 
                title: new Text("O.N.S") ,
                subtitle: new Text("FASHION MEETS TECHNOLOGY & COMMERCE") 
            })
        ],
        viewMoreButtonDisplayText: "VIEW ALL CASE STUDIES"
    },
    hero: {
        backgroundImageUrl: getUrl(getAssetFromStatic("hero_background_05.jpg")),
        navbar: {
            links: [
                {
                    displayText: "WORK"
                },
                {
                    displayText: "AGENCY"
                },
                {
                    displayText: "EXPERTISE"
                },
                {
                    displayText: "SERVICES"
                }
            ],
            button: {
                displayText: "CONTACT US"
            },
        },
        content: {
            title: {
                displayText: "We Create Memorable Websites That Sell"
            },
            description: {
                displayText: "We partner with brands like yours to create websites your customers will remember, vastly improve your key metrics, and display your brand with pride."
            },
            button: {
                displayText: "VIEW OUR WORK"
            }
        }
    },
    clients: {
        viewAllButton: {
            displayText: "VIEW ALL"
        },
        header: {
            title: {
                displayText: "Clients"
            },
            subtitle: {
                displayText: "FROM START-UPS TO GLOBAL BRANDS"
            }
        },
        clientsLogos: [
            getAssetFromStatic("logo_01.jpg"),
            getAssetFromStatic("logo_01.jpg"),
            getAssetFromStatic("logo_01.jpg"),
            getAssetFromStatic("logo_01.jpg"),
            getAssetFromStatic("logo_01.jpg"),
            getAssetFromStatic("logo_01.jpg"),
            getAssetFromStatic("logo_01.jpg"),
            getAssetFromStatic("logo_01.jpg"),
            getAssetFromStatic("logo_01.jpg"),
            getAssetFromStatic("logo_01.jpg"),
            getAssetFromStatic("logo_01.jpg"),
            getAssetFromStatic("logo_01.jpg"),
        ]
    },
    whatWeDo: {
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
            imageUrl: getAssetFromStatic("what_we_do_background_02.jpg"),
        }
    }
}

