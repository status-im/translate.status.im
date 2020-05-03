import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-margin">
        <h2 className="footer-title" >The Status Network</h2>
        <div>
          <h3 className="footer-subtitle">Get in touch</h3>
        </div>
        <div className="footer-inline">
          <div className="inner footer-inline social-margin">
            <div className="flex">
              <svg className="footer-svg" width="26px" height="26px" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd" clipRule="evenodd" d="M0 12.7736C0 5.71653 5.9951 0 13.1103 0C20.2313 0 26 5.93706 26 12.9943C26 20.0514 20.2313 25.9885 13.1103 25.9885L0.00580125 26L0 12.7736ZM9.84279 19.7264C10.8004 20.1791 11.874 20.4287 13 20.4287C17.1031 20.4287 20.4285 17.1031 20.4285 13C20.4285 8.89685 17.1031 5.57143 13 5.57143C8.89688 5.57143 5.57143 8.89685 5.57143 13C5.57143 14.2826 5.89643 15.4898 6.46518 16.5402L5.13615 20.8929L9.84279 19.7264Z" fill="white"/> </svg>
              <div className="inner footer-inline">
                  <a href="https://discuss.status.im/" rel="noopener noreferrer" target="_blank">Discuss</a>
                  <p>Join the community in long form discussion.</p>
              </div>
            </div>
          </div>
          <div className="inner footer-inline social-margin">
            <div className="flex">
              <svg className="footer-svg" width="24px" height="26px" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd" clipRule="evenodd" d="M12.1024 12.2436C13.5117 12.3959 14.921 12.548 16.6536 12.4479C21.348 12.1763 24.1917 9.67638 23.9899 5.93954C23.7842 2.13751 20.0011 -0.204891 16.2158 0.0141337C10.0471 0.37075 5.51085 5.99009 4.99996 12.4127C5.83772 12.2091 6.71948 12.0875 7.55103 12.0395C9.28379 11.9393 10.6931 12.0915 12.1024 12.2436ZM0.00956796 20.5554C0.204224 24.0407 3.78832 26.1879 7.37452 25.987C13.2185 25.6601 17.5162 20.509 18 14.6216C17.2063 14.8083 16.3711 14.9199 15.5832 14.9639C13.9417 15.0557 12.6065 14.9162 11.2712 14.7766C9.93612 14.6372 8.60089 14.4977 6.95944 14.5896C2.51233 14.8384 -0.18188 17.13 0.00956796 20.5554Z" fill="white"/> </svg>
              <div className="inner footer-inline">
                  <a href="http://get.status.im/chat/public/status" rel="noopener noreferrer" target="_blank">Status</a>
                  <p>Join the growing community in Status.</p>
              </div>                
            </div>
          </div>
          <div className="inner footer-inline social-margin">
            <div className="flex">
              <svg className="footer-svg" width="26px" height="23px" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd" clipRule="evenodd" d="M22.9355 3.63754C24.068 2.88641 24.9004 1.74693 25.2824 0.424615C24.2441 1.09692 23.0967 1.57462 21.8937 1.83292C20.9163 0.676667 19.4968 0.00833227 18.0007 0C15.054 0 12.6655 2.599 12.6655 5.80662C12.6655 6.25069 12.7123 6.69477 12.8059 7.12823C8.372 6.88762 4.4408 4.577 1.8096 1.06331C1.33262 1.95903 1.08462 2.96306 1.08853 3.98254C1.08853 5.99592 2.028 7.774 3.45973 8.81431C2.60732 8.78404 1.7762 8.53453 1.04347 8.08892V8.16146C1.04347 10.9745 2.88427 13.3223 5.3248 13.8548C4.54138 14.0861 3.71481 14.1207 2.91547 13.9557C3.5932 16.2628 5.564 17.94 7.8988 17.9878C5.70926 19.8779 2.84617 20.7494 0 20.3922C2.4038 22.0864 5.25492 22.9958 8.17613 23C17.9868 23 23.3532 14.1538 23.3532 6.47892C23.3532 6.22769 23.348 5.97646 23.3376 5.72877C24.3923 4.89549 25.2938 3.87773 26 2.72285C25.0321 3.19057 23.9978 3.49927 22.9355 3.63754Z" fill="white"/> </svg>
              <div className="inner footer-inline">
                  <a href="https://twitter.com/ethstatus" rel="noopener noreferrer" target="_blank">Twitter</a>
                  <p>Follow us on Twitter for latest news and announcements.</p>
              </div>
            </div>
          </div>
          <div className="inner footer-inline social-margin">
            <div className="flex">
              <svg className="footer-svg" width="27px" height="26px" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd" clipRule="evenodd" d="M0 13.3301C-0.00036676 19.0684 3.71808 24.163 9.23096 25.9773C9.9064 26.0989 10.1526 25.6878 10.1526 25.3343C10.1526 25.0176 10.1413 24.1795 10.1348 23.0678C6.3802 23.8724 5.58814 21.2812 5.58814 21.2812C4.97264 19.7409 4.08825 19.3298 4.08825 19.3298C2.8621 18.5045 4.18058 18.5205 4.18058 18.5205C5.53631 18.6149 6.249 19.8945 6.249 19.8945C7.45247 21.9306 9.40751 21.342 10.1769 21.0013C10.3 20.1408 10.6482 19.5538 11.0354 19.2195C8.0372 18.8836 4.88517 17.7399 4.88517 12.6328C4.88517 11.1772 5.41159 9.9872 6.27492 9.0563C6.13562 8.71881 5.67237 7.36244 6.40774 5.52782C6.40774 5.52782 7.54156 5.16954 10.1186 6.89539C11.2203 6.5988 12.357 6.44767 13.499 6.44593C14.6403 6.44744 15.7765 6.59803 16.8778 6.89379C19.4532 5.16954 20.587 5.52782 20.587 5.52782C21.3224 7.36244 20.8592 8.71881 20.7199 9.0563C21.5864 9.9872 22.108 11.1772 22.108 12.6328C22.108 17.7527 18.9511 18.8804 15.9448 19.2099C16.4291 19.6209 16.8616 20.4351 16.8616 21.6779C16.8616 23.4597 16.8454 24.8977 16.8454 25.3343C16.8454 25.691 17.0884 26.1053 17.7719 25.9757C24.3127 23.8204 28.1571 17.1437 26.6881 10.491C25.219 3.83825 18.9088 -0.651812 12.0531 0.0775083C5.19748 0.806828 0.000435577 6.52107 0 13.3301H0Z" fill="white"/> </svg>
              <div className="inner footer-inline">
                  <a href="https://github.com/status-im" rel="noopener noreferrer" target="_blank">Github</a>
                  <p>Check out the open-source code and get involved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <a href="https://www.iubenda.com/privacy-policy/94457202" rel="noopener noreferrer" target="_blank">Privacy Policy</a>
      </div>
    </footer>
  );
}

export default Footer;
