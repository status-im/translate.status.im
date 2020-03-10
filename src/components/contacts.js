import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class Contacts extends Component {
  render() {
    return (
      <main>
        <section id="contact-us">
            <h2><FormattedMessage id="main.contact" defaultMessage="Contact Us" /></h2>
                <div className="align-center">
                    <p><FormattedMessage id="main.contact-explanation" defaultMessage="Do you have any questions? Don't hesitate to contact us!" /></p>
                    <p><a className="blue-anchor" href="mailto:translate@status.im">translate@status.im</a></p>
                    <p><a className="blue-anchor" href="https://get.status.im/chat/public/status-translate" target="_blank" rel="noopener noreferrer"><FormattedMessage id="main.public-chat" defaultMessage="#Status-translate public chat" /></a></p>
                </div>
        </section>
      </main>
    );
  }
}

export default Contacts;
