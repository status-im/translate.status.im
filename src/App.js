import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Tutorial from "./components/Tutorial";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import { addLocaleData, IntlProvider } from "react-intl";
import enLocaleData from "react-intl/locale-data/en";
import translations from "./i18n/locales";
import Contributors from "./components/Contributors";
import { Tabs } from "antd";
import styled from "styled-components";

// antd css
import "antd/lib/tabs/style/index.css";
import "antd/lib/input/style/index.css";
import "antd/lib/button/style/index.css";
import "antd/lib/steps/style/index.css";
import "antd/lib/progress/style/index.css";
import "antd/lib/statistic/style/index.css";
import "antd/lib/grid/style/index.css";
// import 'antd/dist/antd.css';

const Container = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
`;

const { TabPane } = Tabs;

addLocaleData(enLocaleData);

const locale = "en";
const messages = translations[locale];

function App() {
  return (
    <>
      <IntlProvider locale={locale} messages={messages}>
        <Container id="main">
          <Nav />
          <Header />
          <Main />
          <Tabs defaultActiveKey="1">
            <TabPane tab="How to contribute" key="1">
              <Tutorial />
            </TabPane>
            <TabPane tab="Contributors" key="2">
              <Contributors />
            </TabPane>
            <TabPane tab="Contacts" key="3">
              <Contacts />
            </TabPane>
          </Tabs>
          <Footer />
        </Container>
      </IntlProvider>
    </>
  );
}

export default App;
