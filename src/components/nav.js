import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { slide as Menu } from 'react-burger-menu'

class Nav extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.closeNav = this.closeNav.bind(this)
  }
  

  closeNav() {
    this.setState({ isOpen: false })
    document.querySelectorAll('[class="bm-overlay"]')[0].click();
  }
  
  render() {
    const { isOpen } = this.state;
    return (
      <nav id="nav">
          <div className='logo-container' >
            <a href=".">
              <img src={require('../images/status-network-logo.svg')} className='logo' alt="Status Logo"/>
            </a>
          </div>
          <Menu right disableAutoFocus pageWrapId={ "nav" } outerContainerId={ "main" } isOpen={ isOpen } >
            <a href="https://github.com/status-im/translate.status.im#how-to-help-translate" target="_blank" rel="noopener noreferrer" onClick={() => this.closeNav()}>
              <FormattedMessage id="nav.how-to-contribute" defaultMessage="How to contribute" />
            </a>
            <a href="https://github.com/status-im/translate.status.im#contributors" target="_blank" rel="noopener noreferrer" onClick={() => this.closeNav()}>
              <FormattedMessage id="nav.contributors" defaultMessage="Contributors" />
            </a>
            <a href="https://statusnetwork.com/" target="_blank" rel="noopener noreferrer" onClick={() => this.closeNav()}>
                <FormattedMessage id="nav.home" defaultMessage="The Status Network" />
            </a>
            <a href="https://github.com/status-im" target="_blank" rel="noopener noreferrer" onClick={() => this.closeNav()}>
                <FormattedMessage id="nav.github" defaultMessage="Github" />
            </a>
            <a href="https://our.status.im/" target="_blank" rel="noopener noreferrer" onClick={() => this.closeNav()}>
                <FormattedMessage id="nav.blog" defaultMessage="Blog" />
            </a>
        </Menu>
      </nav>
    );
  }
}

export default Nav;
