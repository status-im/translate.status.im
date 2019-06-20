import React from 'react';
import { FormattedMessage } from 'react-intl';

const languages = {

    korean: {
        code: 'ko',
        lang: {
            langFlag: require("../images/flags/korea.png"),
            langName: <FormattedMessage id="main.korean" defaultMessage="Korean" /> ,
        },
        link: {
            app: "https://lokalise.co/signup/562366815b97551836b8f1.55149963/ko/",
            website: "https://lokalise.co/signup/831920985cf29a3c550a85.62099336/ko/",
        }
    },

    chinese: {
        code: 'zh',
        lang: {
            langFlag: require("../images/flags/china.png"),
            langName: <FormattedMessage id="main.chinese" defaultMessage="Chinese" />,
        },
        link: {
            app: "https://lokalise.co/signup/562366815b97551836b8f1.55149963/zh_Hans_CN/",
            website: "https://lokalise.co/signup/831920985cf29a3c550a85.62099336/zh_CN/",
        }
    },

    russian: {
        code: 'ru',
        lang: {
            langFlag: require("../images/flags/russia.svg"),
            langName: <FormattedMessage id="main.russian" defaultMessage="Russian" />,
        },
        link: {
            app: "https://lokalise.co/signup/562366815b97551836b8f1.55149963/ru/",
            website: "https://lokalise.co/signup/831920985cf29a3c550a85.62099336/ru/",
        }
    },
    
    spanish_es: {
        code: 'es',
        lang: {
            langFlag: require("../images/flags/spain.png"),
            langName: <FormattedMessage id="main.spanish" defaultMessage="Spanish (ES)" />,
        },
        link: {
            app: "https://lokalise.co/signup/562366815b97551836b8f1.55149963/es/",
            website: "https://lokalise.co/signup/831920985cf29a3c550a85.62099336/es/",
        }
    },

    spanish_la: {
        code: 'es_419',
        lang: {
            langFlag: require("../images/flags/latin_america.png"),
            langName: <FormattedMessage id="main.spanish-latin" defaultMessage="Spanish (LA)" />,
        },
        link: {
            app: "https://lokalise.co/signup/562366815b97551836b8f1.55149963/es_419/",
            website: "https://lokalise.co/signup/831920985cf29a3c550a85.62099336/es_419/",
        }
    },

    portguese_pt: {
        code: 'pt_PT',
        lang: {
            langFlag: require("../images/flags/portugal.png"),
            langName: <FormattedMessage id="main.portuguese-pt" defaultMessage="Portuguese (PT)" />,
        },
        link: {
            app: "https://lokalise.co/signup/562366815b97551836b8f1.55149963/pt/",
            website: "https://lokalise.co/signup/831920985cf29a3c550a85.62099336/pt/",
        }
    },

    portguese_br: {
        code: 'pt_BR',
        lang: {
            langFlag: require("../images/flags/brazil.png"),
            langName: <FormattedMessage id="main.portuguese-br" defaultMessage="Portuguese (BR)" />,
        },
        link: {
            app: "https://lokalise.co/signup/562366815b97551836b8f1.55149963/pt_BR/",
            website: "https://lokalise.co/signup/831920985cf29a3c550a85.62099336/pt_BR/",
        }
    },

    german: {
        code: 'de',
        lang: {
            langFlag: require("../images/flags/germany.png"),
            langName: <FormattedMessage id="main.german" defaultMessage="German" />,
        },
        link: {
            app: "https://lokalise.co/signup/562366815b97551836b8f1.55149963/de/",
            website: "https://lokalise.co/signup/831920985cf29a3c550a85.62099336/de/",
        }
    },

    french: {
        code: 'fr',
        lang: {
            langFlag: require("../images/flags/france.png"),
            langName: <FormattedMessage id="main.france" defaultMessage="French" />,
        },
        link: {
            app: "https://lokalise.co/signup/562366815b97551836b8f1.55149963/fr/",
            website: "https://lokalise.co/signup/831920985cf29a3c550a85.62099336/fr/",
        }
    },

    japanese: {
        code: 'ja',
        lang: {
            langFlag: require("../images/flags/japan.png"),
            langName: <FormattedMessage id="main.japan" defaultMessage="Japan" />,
        },
        link: {
            app: "https://lokalise.co/signup/562366815b97551836b8f1.55149963/ja/",
            website: "https://lokalise.co/signup/831920985cf29a3c550a85.62099336/ja/",
        }
    },

    persian: {
        code: 'fa',
        lang: {
            langFlag: require("../images/flags/iran.png"),
            langName: <FormattedMessage id="main.iran" defaultMessage="Persian" />,
        },
        link: {
            app: "https://lokalise.co/signup/562366815b97551836b8f1.55149963/fa/",
            website: "https://lokalise.co/signup/831920985cf29a3c550a85.62099336/fa/",
        }
    },

    dutch: {
        code: 'nl',
        lang: {
            langFlag: require("../images/flags/netherlands.svg"),
            langName: <FormattedMessage id="main.netherlands" defaultMessage="Dutch" />,
        },
        link: {
            app: "https://lokalise.co/signup/562366815b97551836b8f1.55149963/nl/",
            website: "https://lokalise.co/signup/831920985cf29a3c550a85.62099336/nl/",
        }
    },

}
 
export default languages;
