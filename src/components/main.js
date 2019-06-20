import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import languages from './langs'

function LangCard(props){
  return (
    <div>
      <img src= {props.lang.langFlag} className="flag" alt={props.code} />
      <p className = "language-title">{props.lang.langName}</p>
      <a href = {props.link.app} target="_blank" rel="noopener noreferrer"><p><FormattedMessage id="main.app-application" defaultMessage="App Translation" /></p></a>
      <a href = {props.link.website} target="_blank" rel="noopener noreferrer"><p><FormattedMessage id="main.website-application" defaultMessage="Status.im Website Translation" /></p></a>
    </div>
  );
}

class Main extends Component {
  render() {
    return (

        <main>

          <div className="title-center">
            <h1><FormattedMessage id="main.language" defaultMessage="Languages to Translate" /></h1>
          </div>

          <div>
              
              <div className="languages">

                  <LangCard
                    lang={languages.korean.lang}
                    link={languages.korean.link}
                  />

                  <LangCard
                    lang={languages.chinese.lang}
                    link={languages.chinese.link}
                  />

                  <LangCard
                    lang={languages.japanese.lang}
                    link={languages.japanese.link}
                  />                       

              </div>

              <div className="languages">

                  <LangCard
                    lang={languages.german.lang}
                    link={languages.german.link}
                  />

                  <LangCard
                    lang={languages.french.lang}
                    link={languages.french.link}
                  />

                  <LangCard
                    lang={languages.dutch.lang}
                    link={languages.dutch.link}
                  />
                  
              </div>

              <div className="languages">

                  <LangCard
                    lang={languages.spanish_es.lang}
                    link={languages.spanish_es.link}
                  />   

                  <LangCard
                    lang={languages.spanish_la.lang}
                    link={languages.spanish_la.link}
                  />   


                  <LangCard
                    lang={languages.portguese_pt.lang}
                    link={languages.portguese_pt.link}
                  />
                
              </div>

              <div className="languages">

                  <LangCard
                    lang={languages.portguese_br.lang}
                    link={languages.portguese_br.link}
                  />                

                  <LangCard
                    lang={languages.russian.lang}
                    link={languages.russian.link}
                  />   

                  <LangCard
                    lang={languages.persian.lang}
                    link={languages.persian.link}
                  />

              </div>


              <div className="align-center">
                <p><FormattedMessage id="main.addlanguage" defaultMessage="Want to add your Language?" /></p>
                <p><a href="https://github.com/status-im/translate.status.im" target="_blank" rel="noopener noreferrer"><FormattedMessage id="main.pullrequest" defaultMessage="Submit a pull request to this Github repository" /></a></p>
              </div> <br /><br />

              <div className="align-center">
                <p><FormattedMessage id="main.tracklanguage" defaultMessage="Track the translation progress" /></p>
                <p><a href="https://lokalise.co/public/562366815b97551836b8f1.55149963/" target="_blank" rel="noopener noreferrer"><FormattedMessage id="main.app-translation" defaultMessage="Status app translation" /></a></p>
                <p><a href="https://lokalise.co/public/831920985cf29a3c550a85.62099336/" target="_blank" rel="noopener noreferrer"><FormattedMessage id="main.website-translation" defaultMessage="Status.im website translation" /></a></p>              
              </div>

          </div>

        </main>

    );
  }
}

export default Main;
