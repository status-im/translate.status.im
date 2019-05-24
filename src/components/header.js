import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="head">
          <h1><FormattedMessage id="header.main-1" defaultMessage="Translate Status" />< br />
          <FormattedMessage id="header.main-2" defaultMessage="into Your Language" /></h1>
            <div>
            <p><strong><FormattedMessage id="header.status" defaultMessage="Status" /></strong><FormattedMessage id="header.status-explanation-1" defaultMessage=" is completely open source and made by contributors all over the world."/>< br />
            <FormattedMessage id="header.status-explanation-2" defaultMessage="Your translations can help more people utilize this secure, censorship-resistant service" /></p>
            </div>
        </div>
       
      </header>
      
    );
  }
}


export default Header;
