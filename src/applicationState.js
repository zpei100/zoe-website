const Widget = require('./dataClasses/Widget');
const Text = require('./dataClasses/Text');
const { getUrl, getAssetFromStatic } = require('./utility/helper');

module.exports = {
    caseStudies: {
        header: {
            subtitle: new Text("Featured Case Studies"),
            title: new Text("") ,
        },
        widgets: [
            new Widget({
                imageUrl: getAssetFromStatic("widget_background_04.jpg"), 
                title: new Text("Marketing"),
                subtitle: new Widget("HELP YOU GET YOUR BRAND PUBLIC")
            }),
            new Widget({
                imageUrl: getAssetFromStatic("widget_background_04.jpg"), 
                title: new Text("Design"),
                subtitle: new Text("DESIGN YOUR COMPANY'S BRAND AND LOGO"),
            }),
            new Widget({
                imageUrl: getAssetFromStatic("widget_background_04.jpg"), 
                title: new Text("Events") ,
                subtitle: new Text("PLAN YOUR EVENTS") 
            })
        ],
        viewMoreButtonDisplayText: "VIEW ALL CASE STUDIES"
    },
    hero: {
        backgroundImageUrl: getUrl(getAssetFromStatic("hero_background_05.jpg")),
        navbar: {
            links: [
                {
                    displayText: "What we do",
                    elementID: "#what-we-do-section"
                },
                {
                    displayText: "Case Studies",
                    elementID: "#case-studies-section"
                },
                {
                    displayText: "Clients",
                    elementID: "#clients-section"
                },
                {
                    displayText: "Testimonials",
                    elementID: "#testimonials-section"
                }
            ],
            button: {
                displayText: "CONTACT US"
            },
        },
        content: {
            title: {
                displayText: "Zoe's amazing website"
            },
            description: {
                displayText: "We partner with businesses like your's to create memorable brands through event planning and marketing."
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
                displayText: ""
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
        ]
    },
    whatWeDo: {
        textSection: {
            title: {
                displayText: "What We Do"
            },
            subtitle: {
                displayText: "Marketing, branding, design, photography, event planning."
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

