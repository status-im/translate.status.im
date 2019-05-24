import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
     
      <footer>
          <h3>Status.im</h3>
          <ul>
            <li><a href="https://www.facebook.com/ethstatus/" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="https://twitter.com/ethstatus" target="_blank"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://www.youtube.com/channel/UCFzdJTUdzqyX4e9dOW7UpPQ" target="_blank"><i className="fab fa-youtube"></i></a></li>
          </ul>
      </footer>
      
    );
  }
}

export default Footer;
