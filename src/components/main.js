import React, { Component } from 'react';
import Form from "./form";
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
                  <img src={require("../images/flags/korea.png")} className="flag" />
                  <p className="language-title"><FormattedMessage id="main.korean" defaultMessage="Korean" /></p>
                  <a href="https://forms.gle/EzAQ12B3vciiCiHF7" target="_blank"><p><FormattedMessage id="main.application" defaultMessage="Apply" /></p></a>
                </div>

                <div className="language-two">
                  <img src={require("../images/flags/china.png")} className="flag" />
                  <p className="language-title"><FormattedMessage id="main.chinese" defaultMessage="Chinese" /></p>
                  <a href="https://forms.gle/zkcYVmgHDV2cogD19" target="_blank"><p><FormattedMessage id="main.application" defaultMessage="Apply" /></p></a>    
                </div>

                <div className="language-three">
                  <img src={require("../images/flags/russia.svg")} className="flag" />
                  <p className="language-title"><FormattedMessage id="main.russian" defaultMessage="Russian" /></p>
                  <a href="https://forms.gle/zkcYVmgHDV2cogD19" target="_blank"><p><FormattedMessage id="main.application" defaultMessage="Apply" /></p></a>
                </div>

            </div>

          </div>
            <div className="languages">
              <div className="language-one">
                <img src={require("../images/flags/spain.png")} className="flag" />
                <p className="language-title"><FormattedMessage id="main.spanish" defaultMessage="Spanish" /></p>
                <a href="https://forms.gle/zkcYVmgHDV2cogD19" target="_blank"><p><FormattedMessage id="main.application" defaultMessage="Apply" /></p></a>
              </div>

              <div className="language-two">
                <img src={require("../images/flags/latin_america.png")} className="flag" />
                <p className="language-title"><FormattedMessage id="main.spanish-latin" defaultMessage="Spanish (Latin America)" /></p>
                <a href="https://forms.gle/zkcYVmgHDV2cogD19" target="_blank"><p><FormattedMessage id="main.application" defaultMessage="Apply" /></p></a>
              </div>

              <div className="language-three">
                <img src={require("../images/flags/portugal.png")} className="flag" />
                <p className="language-title"><FormattedMessage id="main.portuguese" defaultMessage="Portuguese" /></p>
                <a href="https://forms.gle/zkcYVmgHDV2cogD19" target="_blank"><p><FormattedMessage id="main.application" defaultMessage="Apply" /></p></a>     
              </div>

            </div>

        <section>
          <h2><FormattedMessage id="main.how-to-contribute" defaultMessage="How to Contribute?" /></h2>
          <div>
            <div>
              <h3><FormattedMessage id="main.app-and-website" defaultMessage="App and Website" /></h3>
            </div>
            <div>
              <div className="margin-bottom-40">
                  <p><FormattedMessage id="main.before-lokalise" defaultMessage="You can translate the Status app and website into your language with" /> <a href="https://lokalise.co/" target="_blank"><FormattedMessage id="main.lokalise" defaultMessage="Lokalise! " /></a>
                  <FormattedMessage id="main.after-lokalise" defaultMessage="Lokalise automates all the translation workflow and is very easy to use. You can find the simple 2 steps to start the translation as below." /></p>
              </div>
              <div className="margin-bottom-40">
                <p><b><FormattedMessage id="main.step1" defaultMessage="Step 1 : " /></b><FormattedMessage id="main.fillout" defaultMessage="Please click on the 'apply' button above and fill out the application form which takes less than 1 minute. As soon as we check out your application, you will be invited to Lokalise as a translator." /></p>
                  <div className="lokalise-img">
                    <img src={require("../images/lokalise1.png")} width="70%" className=""></img><br /><br /><br />
                    <img src={require("../images/lokalise2.png")} width="70%" className=""></img>                    
                  </div>               
              </div>          
              <div className="margin-bottom-40">
                <p><b><FormattedMessage id="main.step2" defaultMessage="Step 2 : " /></b><FormattedMessage id="main.find" defaultMessage="Sign up for Lokalise and you will find the words and sentences which are used on the Status app and website. Lokalise offers useful online translators(e.g. Google Translate, Microsoft Translator, and Yandex.Translate) showing suggestions for each of the strings and safely protects variables or string interpolation components that should not be translated." /></p>
                <div className="lokalise-img">
                  <img src={require("../images/lokalise3.png")} width="70%" className=""></img>
                </div>
              </div>
              <div className="margin-bottom-40">
                <p><FormattedMessage id="main.finished" defaultMessage="That's all! Your passion for the private, secure and censorship-resistant communications will help build a better world that everyone can say what they want to say with Status. " /></p>
              </div>
            </div>
          </div>
          <div>
            <h3><FormattedMessage id="main.documentation" defaultMessage="Documentation" /></h3>
            <p><FormattedMessage id="main.documentation-explanation" defaultMessage="We will refresh our documentation soon. Stay tunded and we will let you know when we are ready! You can see how our documentation's .md files look like " />
            <a href="https://github.com/status-im/status.im/blob/develop/source/build_status/desktop.md" target="_blank">
            <FormattedMessage id="main.doc-example" defaultMessage="here" /></a></p>
          </div>
        </section>

        <section id="contact-us">
          <h2><FormattedMessage id="main.contact" defaultMessage="Contact Us" /></h2>
          
          {/* <Form /> */}
          <div className="align-center">
            <p><FormattedMessage id="main.contact-explanation" defaultMessage="if you have any further questions, feel free to contact us" /></p>
            <p><a href="mailto:translate@status.im">translate@status.im</a></p>
            <p><a href="https://get.status.im/chat/public/status-translate"><FormattedMessage id="main.public-chat" defaultMessage="#Status-translate Public chat" /></a></p>
          </div>
        </section>      
       
      </main>
    );
  }
}

export default Main;
