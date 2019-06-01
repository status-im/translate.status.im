import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class Main extends Component {
  render() {
    return (
      <main>
        
        <div className="title-center">
          <h1><FormattedMessage id="main.language" defaultMessage="Languages to Translate" /></h1>
        </div>

        <div>
             <div className="languages">
                <div className="language-one">
                  <img src={require("../images/flags/korea.png")} className="flag" alt="Korean Flag"/>
                  <p className="language-title"><FormattedMessage id="main.korean" defaultMessage="Korean" /></p>
                  <a href="https://lokalise.co/signup/562366815b97551836b8f1.55149963/ko/" target="_blank" rel="noopener noreferrer"><p><FormattedMessage id="main.app-application" defaultMessage="App Translation" /></p></a>
                  <a href="https://lokalise.co/signup/562366815b97551836b8f1.55149963/ko/" target="_blank" rel="noopener noreferrer"><p><FormattedMessage id="main.website-application" defaultMessage="Status.im Website Translation" /></p></a>                 
                </div>

                <div className="language-two">
                  <img src={require("../images/flags/china.png")} className="flag" alt="Chinese Flag" />
                  <p className="language-title"><FormattedMessage id="main.chinese" defaultMessage="Chinese" /></p>
                  <a href="https://lokalise.co/signup/562366815b97551836b8f1.55149963/zh_Hans_CN/" target="_blank" rel="noopener noreferrer"><p><FormattedMessage id="main.app-application" defaultMessage="App Translation" /></p></a>    
                </div>

                <div className="language-three">
                  <img src={require("../images/flags/russia.svg")} className="flag" alt="Russian Flag" />
                  <p className="language-title"><FormattedMessage id="main.russian" defaultMessage="Russian" /></p>
                  <a href="https://lokalise.co/signup/562366815b97551836b8f1.55149963/ru/" target="_blank" rel="noopener noreferrer"><p><FormattedMessage id="main.app-application" defaultMessage="App Translation" /></p></a>
                </div>

            </div>

          </div>
            <div className="languages">
              <div className="language-one">
                <img src={require("../images/flags/spain.png")} className="flag" alt="Spanish Flag" />
                <p className="language-title"><FormattedMessage id="main.spanish" defaultMessage="Spanish" /></p>
                <a href="https://lokalise.co/signup/562366815b97551836b8f1.55149963/es/" target="_blank" rel="noopener noreferrer"><p><FormattedMessage id="main.app-application" defaultMessage="App Translation" /></p></a>
              </div>

              <div className="language-two">
                <img src={require("../images/flags/latin_america.png")} className="flag" alt="Latin America Icon" />
                <p className="language-title"><FormattedMessage id="main.spanish-latin" defaultMessage="Spanish (LA)" /></p>
                <a href="https://lokalise.co/signup/562366815b97551836b8f1.55149963/es_419/" target="_blank" rel="noopener noreferrer"><p><FormattedMessage id="main.app-application" defaultMessage="App Translation" /></p></a>
              </div>

              <div className="language-three">
                <img src={require("../images/flags/portugal.png")} className="flag" alt="Portuguese Flag" />
                <p className="language-title"><FormattedMessage id="main.portuguese" defaultMessage="Portuguese" /></p>
                <a href="https://lokalise.co/signup/562366815b97551836b8f1.55149963/pt/" target="_blank" rel="noopener noreferrer"><p><FormattedMessage id="main.app-application" defaultMessage="App Translation" /></p></a>     
              </div>
            </div>
      </main>
    );
  }
}

export default Main;
