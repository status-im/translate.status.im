import React from 'react';
import { FormattedMessage } from 'react-intl';

const languages = [

    {
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

    {
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

    {
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

]
 
export default languages;
