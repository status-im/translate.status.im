import React, { Component } from 'react';
import Nav from "./components/nav";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import { addLocaleData, IntlProvider } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import koLocaleData from 'react-intl/locale-data/ko';
import translations from './i18n/locales';

addLocaleData(enLocaleData);
addLocaleData(koLocaleData);

var locale = (navigator.languages.slice(0, 2) && navigator.languages[0].slice(0,2)) || "en";
var messages = translations[locale];

class App extends Component {
  render() {
    return (
        <div className="container">

          <IntlProvider locale={locale} messages={messages}>
            <Nav />
          </IntlProvider>
          <IntlProvider locale={locale} messages={messages}>          
            <Header />
          </IntlProvider>          
          <IntlProvider locale={locale} messages={messages}>
            <Main />
          </IntlProvider>
          <IntlProvider locale={locale} messages={messages}>
            <Footer />
          </IntlProvider>
        </div>
    );
  }
}

export default App;
