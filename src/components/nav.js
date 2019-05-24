import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <a href="https://status.im/" target="_blank"><li><img src={require('../images/logo.png')} className="center-with-margin"/></li></a>
        </ul>
        <ul>
          <li><a href="https://status.im/" target="_blank"><FormattedMessage id="nav.home" defaultMessage="Home" /></a></li>
          <li><a href="https://github.com/status-im" target="_blank"><FormattedMessage id="nav.github" defaultMessage="Github" /></a></li>
          <li><a href="https://our.status.im/" target="_blank"><FormattedMessage id="nav.blog" defaultMessage="Blog" /></a></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
