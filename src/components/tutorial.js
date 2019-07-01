import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import ScrollableAnchor from 'react-scrollable-anchor'

class Tutorial extends Component {
  render() {
    return (
      <main>
        <ScrollableAnchor id={'tutorial'}>
          <section>
              <h2><FormattedMessage id="main.how-to-contribute" defaultMessage="How to Contribute?" /></h2>          
            <div>
              <div>
                <h3><FormattedMessage id="main.app-and-website" defaultMessage="App and Website" /></h3>
              </div>
              <div>
                <div className="margin-bottom-40">
                    <p><FormattedMessage id="main.before-lokalise" defaultMessage="You can translate the Status app and website into your language with" /> <a href="https://lokalise.co/" target="_blank" rel="noopener noreferrer"><FormattedMessage id="main.lokalise" defaultMessage="Lokalise! " /></a>
                    <FormattedMessage id="main.after-lokalise" defaultMessage="Lokalise automates all the translation workflow and is very easy to use. You can find the simple 3 steps to start the translations as below." /></p>
                </div>
                <div className="margin-bottom-40">
                  <p><b><FormattedMessage id="main.step1" defaultMessage="Step 1 : " /></b><FormattedMessage id="main.step1-1" defaultMessage="Click on the button you want to translate (e.g. App Translation) and sign up for Lokalise. It takes less than 1 minute." /></p>
                    <div className="lokalise-img">
                      <img src={require("../images/lokalise1.png")} width="80%" alt="Lokalise Sign up" ></img><br /><br /><br />                 
                    </div>               
                </div>          
                <div className="margin-bottom-40">
                  <p><b><FormattedMessage id="main.step2" defaultMessage="Step 2 : " /></b><FormattedMessage id="main.step2-1" defaultMessage="You will find the project you applied for. Check out the progress and click the language you would like to translate." /></p>
                  <div className="lokalise-img">
                    <img src={require("../images/lokalise2.png")} width="80%" alt="Example Lokalise Usage" ></img>
                  </div>
                </div>
                <div className="margin-bottom-40">
                  <p><b><FormattedMessage id="main.step3" defaultMessage="Step 3 : " /></b><FormattedMessage id="main.step3-1" defaultMessage="There are words and sentences which are used on the Status app or website. Lokalise offers useful online translators (e.g. Google Translate) showing suggestions for each of the strings and safely protects variables or string interpolation components that should not be translated. Read this" />
                  <a href="https://github.com/status-im/translate.status.im/blob/develop/README.md#translation-guidelines" target="_blank" rel="noopener noreferrer"><FormattedMessage id="main.pullrequest-link" defaultMessage="translation guidelines" /></a>
                  <FormattedMessage id="main.andstart" defaultMessage="and let's get it started!" />
                  </p>                  
                  <div className="lokalise-img">
                    <img src={require("../images/lokalise3.png")} width="80%" alt="Example Lokalise Usage" ></img>
                  </div>
                </div>
                <div className="margin-bottom-40">
                  <p><FormattedMessage id="main.finished" defaultMessage="That's all. Your passion for the private, secure and censorship-resistant communications will help build a better world that everyone can say what they want to say with Status. " /></p>
                </div>
              </div>
            </div>
            <div>
              <h3><FormattedMessage id="main.documentation" defaultMessage="Documentation" /></h3>
              <p><FormattedMessage id="main.documentation-explanation" defaultMessage="We will refresh our documentation soon. Stay tunded and we will let you know when we are ready! You can see how our documentation's .md files look like " />
              <a href="https://github.com/status-im/status.im/blob/develop/source/build_status/desktop.md" target="_blank" rel="noopener noreferrer">
              <FormattedMessage id="main.doc-example" defaultMessage="here" /></a></p>
            </div>
          </section>
        </ScrollableAnchor>        
      </main>
    );
  }
}

export default Tutorial;
