import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import ScrollableAnchor from 'react-scrollable-anchor'
import { Steps, Button } from 'antd';

const { Step } = Steps;

const steps = [
  {
    title: 'Step 1',
    content: 
    <div className="margin-bottom-40">
      <p><b><FormattedMessage id="main.step1" defaultMessage="Step 1 : " /></b><FormattedMessage id="main.step1-1" defaultMessage="In the language cards above, click a link you want to contribute (e.g. Status DApp translation) and sign up for Lokalise." /></p>
      <div className="lokalise-img">
        <img src={require("../images/lokalise1.png")} className="image-size" alt="Lokalise Sign up" ></img><br /><br /><br />                 
      </div>               
    </div>,
  },
  {
    title: 'Step 2',
    content: 
    <div className="margin-bottom-40">
      <p><b><FormattedMessage id="main.step2" defaultMessage="Step 2 : " /></b><FormattedMessage id="main.step2-1" defaultMessage="You will find a project that needs your help. Check out the progress and click 'WORDS TO DO (new words)` or 'UNVERIFIED (updated words)'." /></p>
      <div className="lokalise-img">
        <img src={require("../images/lokalise2.png")} className="image-size" alt="Example Lokalise Usage" ></img>
      </div>
    </div>,
  },
  {
    title: 'Step 3',
    content: 
    <div className="margin-bottom-40">
      <p><b><FormattedMessage id="main.step3" defaultMessage="Step 3 : " /></b><FormattedMessage id="main.step3-1" defaultMessage="Read this" />
      <a className="blue-anchor" href="https://github.com/status-im/translate.status.im/blob/develop/README.md#translation-guidelines" target="_blank" rel="noopener noreferrer"><FormattedMessage id="main.pullrequest-link" defaultMessage="translation guidelines" /></a>
      <FormattedMessage id="main.andstart" defaultMessage="and let's get it started!" />
      </p>                  
      <div className="lokalise-img">
        <img src={require("../images/lokalise3.png")} className="last-image-size" alt="Example Lokalise Usage" ></img>
      </div>
    </div>,
  },
];

const Tutorial = () => {
  
  const [current, setCurrent] = useState(0);
  const onChange =  current => {
    setCurrent(current)
  };
  
  return (
    <main>
      <ScrollableAnchor id={'tutorial'}>
        <section>
            <h2 className="font-weight-400"><FormattedMessage id="main.how-to-contribute" defaultMessage="How to Contribute?" /></h2>          
            <div>
            <div>
              <h3 className="font-weight-400"><FormattedMessage id="main.app-and-website" defaultMessage="App and Website" /></h3>
            </div>
            <div>
              <div className="margin-bottom-40">
                  <p><FormattedMessage id="main.before-lokalise" defaultMessage="You can translate the Status app and website into your language with" /> <a className="blue-anchor" href="https://lokalise.co/" target="_blank" rel="noopener noreferrer"><FormattedMessage id="main.lokalise" defaultMessage="Lokalise! " /></a>
                  <FormattedMessage id="main.after-lokalise" defaultMessage="Lokalise automates all the translation workflow and is very easy to use. You can find the simple 3 steps to start the translations as below." /></p>
              </div>
              <Steps current={current} onChange={onChange}>
                {steps.map(item => (
                  <Step key={item.title} title={item.title} />
                ))}
              </Steps>
              <div className="steps-content">{steps[current].content}</div>
            </div>
          </div>
        </section>
      </ScrollableAnchor>        
    </main>
  );
}

export default Tutorial;
