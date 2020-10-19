import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { slide as Menu } from 'react-burger-menu'
import { Button } from 'antd';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeNav = () => {
    setIsOpen(false)
    document.querySelectorAll('[class="bm-overlay"]')[0].click();
  }

  return (
    <nav id="nav">
        <div className='logo-container' >
          <a href=".">
            <img src={require('../images/status-network-logo.svg')} className='logo' alt="Status Logo"/>
          </a>
        </div >
        <div className="nav-button-wrapper nav-desktop">
          <Button className="nav-button nav-margin-right">
            <a className="nav-link" href="https://github.com/status-im/translate.status.im#translate-status-into-your-language" target="_blank" rel="noopener noreferrer">How to contribute</a>
          </Button>
          <Button className="nav-button" type="primary">
            <a className="nav-link" href="https://status.im/get/" target="_blank" rel="noopener noreferrer">Get Status</a>
          </Button>
        </div>
        <div className="nav-mobile">
          <Menu right disableAutoFocus pageWrapId={ "nav" } outerContainerId={ "main" } isOpen={ isOpen } >
            <a href="https://github.com/status-im/translate.status.im#how-to-help-translate" target="_blank" rel="noopener noreferrer" onClick={closeNav}>
              <FormattedMessage id="nav.how-to-contribute" defaultMessage="How to contribute" />
            </a>
            <a href="https://github.com/status-im/translate.status.im#contributors" target="_blank" rel="noopener noreferrer" onClick={closeNav}>
              <FormattedMessage id="nav.contributors" defaultMessage="Contributors" />
            </a>
            <a href="https://statusnetwork.com/" target="_blank" rel="noopener noreferrer" onClick={closeNav}>
                <FormattedMessage id="nav.aboutus" defaultMessage="About us" />
            </a>
            <a href="https://github.com/status-im" target="_blank" rel="noopener noreferrer" onClick={closeNav}>
                <FormattedMessage id="nav.github" defaultMessage="Github" />
            </a>
            <a href="https://our.status.im/" target="_blank" rel="noopener noreferrer" onClick={closeNav}>
                <FormattedMessage id="nav.blog" defaultMessage="Blog" />
            </a>
          </Menu>
        </div>
    </nav>
  );
}

export default Nav;
