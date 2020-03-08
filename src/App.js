import React, { Component } from 'react';
import Nav from "./components/nav";
import Header from "./components/header";
import Main from "./components/main";
import Tutorial from "./components/tutorial";
import Contacts from "./components/contacts";
import Footer from "./components/footer";
import { addLocaleData, IntlProvider } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import koLocaleData from 'react-intl/locale-data/ko';
import translations from './i18n/locales';
import Contributors from './components/contributors';
import { Tabs } from 'antd';
import 'antd/lib/tabs/style/index.css';

const { TabPane } = Tabs;

addLocaleData(enLocaleData);
addLocaleData(koLocaleData);

var locale = navigator.userLanguage || (navigator.languages.slice(0, 2) && navigator.languages[0].slice(0,2)) || "en";;
var messages = translations[locale];

class App extends Component {
  render() {
    return (
        <div id="main" className="container">
          <IntlProvider locale={locale} messages={messages}>
            <Nav />
          </IntlProvider>
          <IntlProvider locale={locale} messages={messages}>          
            <Header />
          </IntlProvider>          
          <IntlProvider locale={locale} messages={messages}>
            <Main />
          </IntlProvider>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Contributors" key="1">
              <IntlProvider locale={locale} messages={messages}>
                <Contributors />
              </IntlProvider>              
            </TabPane>
            <TabPane tab="How to contribute" key="2">
              <IntlProvider locale={locale} messages={messages}>
                <Tutorial />
              </IntlProvider>              
            </TabPane>
            <TabPane tab="Contacts" key="3">
              <IntlProvider locale={locale} messages={messages}>
                <Contacts />
              </IntlProvider>              
            </TabPane>            
          </Tabs>
          <IntlProvider locale={locale} messages={messages}>
            <Footer />
          </IntlProvider>
        </div>
    );
  }
}

export default App;
