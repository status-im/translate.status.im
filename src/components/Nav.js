import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { slide as BurgerMenu } from "react-burger-menu";
import { Button } from "antd";
import styled, { createGlobalStyle } from "styled-components/macro";
import { externalURLs } from "../constants/externalURLs";

const BurgerMenuStyles = createGlobalStyle`
  .bm-menu {
    background: #fff !important;
  }
  .bm-menu a {
    color: #4d4d4d;
  }
  .bm-menu a:hover {
    color: #949494;
    font-weight: 900;
  }

  .bm-item-list {
    height: 50% !important;
  }

  .bm-item-list a {
    padding: 0.8em;
    text-decoration: none;
  }
  .bm-item-list a span {
    margin-left: 10px;
    font-weight: 700;
  }
  .bm-item:focus {
    outline: none;
  }

  /* Position and sizing of burger button */
  .bm-burger-button {
    position: absolute;
    width: 30px;
    height: 25px;
    right: 60px;
    top: 36px;

    @media (max-width: 500px) {
      width: 25px;
      height: 20px;
      top: 30px;
      right: 30px;
    }
  }
  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #4d4d4d;
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: #949494;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #4d4d4d;
  }

  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #373a47;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
    top: 0px;
  }
`;

const LogoContainer = styled.div`
  position: absolute;
  z-index: 10;
  margin: 20px;
`;

const LogoImg = styled.img`
  width: 250px;
  height: auto;
  margin-left: 50px;

  @media (max-width: 1200px) {
    margin-left: 35px;
  }

  @media (max-width: 599px) and (min-width: 0px) {
    margin-left: 20px;
  }

  @media (max-width: 500px) {
    width: 200px;
    height: auto;
    margin-left: 10px;
  }
`;

const NavButtonWrapper = styled.div`
  display: inline-block;
  position: absolute;
  z-index: 10;
  top: 30px;
  right: 50px;

  @media (max-width: 700px) {
    display: none;
  }
`;

const NavButton = styled(Button)`
  width: auto;
  display: inline-block;
  font-size: 18px;
  height: auto;
`;

const NavMobile = styled.div`
  display: none;

  @media (max-width: 700px) {
    display: inline;
  }
`;

function NavLink({ children, url, ...props }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;

function MenuLink({ id, text, url, ...props }) {
  return (
    <a target="_blank" rel="noopener noreferrer" href={url} {...props}>
      <FormattedMessage id={id} defaultMessage={text} />
    </a>
  );
}

function Logo() {
  return (
    <a href=".">
      <LogoImg
        //eslint-disable-next-line no-undef
        src={require("../images/status-network-logo.svg")}
        alt="Status Logo"
      />
    </a>
  );
}

const mobilesLinks = [
  {
    id: "nav.how-to-contribute",
    text: "How to contribute",
    url: externalURLs.contribute,
  },
  {
    id: "nav.contributors",
    text: "Contributors",
    url: externalURLs.contributors,
  },
  { id: "nav.aboutus", text: "About us", url: externalURLs.aboutUs },
  { id: "nav.github", text: "Github", url: externalURLs.github },
  { id: "nav.blog", text: "Blog", url: externalURLs.blog },
];

function Nav() {
  const [isMenuOpen, handleMenu] = useState(false);

  function handleCloseMenu() {
    handleMenu(false);
  }

  function handleStateChange(state) {
    handleMenu(state.isOpen);
  }

  return (
    <nav id="nav">
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavButtonWrapper>
        <NavButton style={{ marginRight: 25 }}>
          <StyledNavLink url={externalURLs.contribute}>How to contribute</StyledNavLink>
        </NavButton>
        <NavButton type="primary">
          <StyledNavLink url={externalURLs.statusDownload}>Get Status</StyledNavLink>
        </NavButton>
      </NavButtonWrapper>
      <NavMobile>
        <BurgerMenuStyles />
        <BurgerMenu
          right
          disableAutoFocus
          pageWrapId={"nav"}
          outerContainerId={"main"}
          onStateChange={handleStateChange}
          isOpen={isMenuOpen}
        >
          {mobilesLinks.map(linkProps => (
            <MenuLink key={linkProps.id} onClick={handleCloseMenu} {...linkProps} />
          ))}
        </BurgerMenu>
      </NavMobile>
    </nav>
  );
}

export default Nav;
