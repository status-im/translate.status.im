import React, { Component } from 'react';
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Tutorial from "./components/Tutorial";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import { addLocaleData, IntlProvider } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import translations from './i18n/locales';
import Contributors from './components/Contributors';
import { Tabs } from 'antd';

// antd css
import 'antd/lib/tabs/style/index.css';
import 'antd/lib/input/style/index.css';
import 'antd/lib/button/style/index.css';
import 'antd/lib/steps/style/index.css';
import 'antd/lib/progress/style/index.css';
import 'antd/lib/statistic/style/index.css';
import 'antd/lib/grid/style/index.css';
// import 'antd/dist/antd.css';

const { TabPane } = Tabs;

addLocaleData(enLocaleData);

const locale = "en";;
const messages = translations[locale];

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
          <Tabs defaultActiveKey="1" className="antd-tab-custom">
            <TabPane tab="How to contribute" key="1">
              <IntlProvider locale={locale} messages={messages}>
                <Tutorial />
              </IntlProvider>
            </TabPane>
            <TabPane tab="Contributors" key="2">
              <IntlProvider locale={locale} messages={messages}>
                <Contributors />
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
