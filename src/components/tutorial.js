import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import ScrollableAnchor from 'react-scrollable-anchor'
import { Steps, Button } from 'antd';
import 'antd/lib/steps/style/index.css';
import 'antd/lib/button/style/index.css';

const { Step } = Steps;

const steps = [
  {
    title: 'Step 1',
    content: 
    <div className="margin-bottom-40">
      <p><b><FormattedMessage id="main.step1" defaultMessage="Step 1 : " /></b><FormattedMessage id="main.step1-1" defaultMessage="Click on the button you want to translate (e.g. App Translation) and sign up for Lokalise. It takes less than 1 minute." /></p>
      <div className="lokalise-img">
        <img src={require("../images/lokalise1.png")} className="image-size" alt="Lokalise Sign up" ></img><br /><br /><br />                 
      </div>               
    </div>,
  },
  {
    title: 'Step 2',
    content: 
    <div className="margin-bottom-40">
      <p><b><FormattedMessage id="main.step2" defaultMessage="Step 2 : " /></b><FormattedMessage id="main.step2-1" defaultMessage="You will find the project you applied for. Check out the progress and click the language you would like to translate." /></p>
      <div className="lokalise-img">
        <img src={require("../images/lokalise2.png")} className="image-size" alt="Example Lokalise Usage" ></img>
      </div>
    </div>,
  },
  {
    title: 'Step 3',
    content: 
    <div className="margin-bottom-40">
      <p><b><FormattedMessage id="main.step3" defaultMessage="Step 3 : " /></b><FormattedMessage id="main.step3-1" defaultMessage="There are words and sentences which are used on the Status app or website. Read this" />
      <a href="https://github.com/status-im/translate.status.im/blob/develop/README.md#translation-guidelines" target="_blank" rel="noopener noreferrer"><FormattedMessage id="main.pullrequest-link" defaultMessage="translation guidelines" /></a>
      <FormattedMessage id="main.andstart" defaultMessage="and let's get it started!" />
      </p>                  
      <div className="lokalise-img">
        <img src={require("../images/lokalise3.png")} className="last-image-size" alt="Example Lokalise Usage" ></img>
      </div>
    </div>,
  },
];

class Tutorial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
    console.log()
  }

  onChange = current => {
    this.setState({ current });
  };

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }
  
  render() {
    const { current } = this.state;
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
                    <p><FormattedMessage id="main.before-lokalise" defaultMessage="You can translate the Status app and website into your language with" /> <a className="blue-anchor" href="https://lokalise.co/" target="_blank" rel="noopener noreferrer"><FormattedMessage id="main.lokalise" defaultMessage="Lokalise! " /></a>
                    <FormattedMessage id="main.after-lokalise" defaultMessage="Lokalise automates all the translation workflow and is very easy to use. You can find the simple 3 steps to start the translations as below." /></p>
                </div>
                <Steps current={current} onChange={this.onChange}>
                  {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                  ))}
                </Steps>                
                <div className="steps-content">{steps[current].content}</div>
                <div className="steps-action">
                  {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => this.next()}>
                      Next
                    </Button>
                  )}
                  {current > 0 && (
                    <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                      Previous
                    </Button>
                  )}
                </div>
              </div>
            </div>
            <div>
              <h3><FormattedMessage id="main.documentation" defaultMessage="Documentation" /></h3>
              <p><FormattedMessage id="main.documentation-explanation" defaultMessage="We will refresh our documentation soon. Stay tunded and we will let you know when we are ready! You can see how our documentation's .md files looks " />
              <a className="blue-anchor" href="https://github.com/status-im/status.im/blob/develop/source/build_status/desktop.md" target="_blank" rel="noopener noreferrer">
              <FormattedMessage id="main.doc-example" defaultMessage="here" /></a></p>
            </div>
          </section>
        </ScrollableAnchor>        
      </main>
    );
  }
}

export default Tutorial;
