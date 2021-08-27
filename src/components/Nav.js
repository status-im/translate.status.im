import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { slide as BurgerMenu } from "react-burger-menu";
import { Button } from "antd";
import styled, { createGlobalStyle } from "styled-components/macro";

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

const NavGlobalStyles = createGlobalStyle`
  .nav-margin-right {
    margin-right: 25px;
  }

  nav img {
    width: 6rem;
  }

  nav ul {
    width: 100%;
    display: grid;
    list-style: none;
    align-items: center;
    padding: 0;
    margin: 0;
  }

  nav ul:first-of-type {
    grid-template-columns: 1fr;
  }

  nav ul:first-of-type li {
    font-size: 1.4rem;
    font-weight: bold;
    text-indent: 30px;
  }

  nav ul:first-of-type li span {
    font-weight: 500;
    color: #444;
  }

  nav ul:last-of-type {
    grid-template-columns: repeat(3, 1fr);
  }

  nav ul li a,
  nav ul li a:visited {
    color: #111;
    text-decoration: none;
    font-weight: bold;
    display: block;
  }

  li.dropdown {
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }

  .dropdown-content a:hover {
    background-color: #f1f1f1;
  }

  .dropdown:hover .dropdown-content {
    display: block;
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

const NavLink = styled.a`
  text-decoration: none;
`;

const NavMobile = styled.div`
  display: none;

  @media (max-width: 700px) {
    display: inline;
  }
`;

function MenuLink({ id, text, ...props }) {
  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
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

function Nav() {
  const [isMenuOpen, handleMenu] = useState(false);

  function handleCloseMenu() {
    handleMenu(false);
  }

  function handleStateChange(state) {
    handleMenu(state.isOpen);
  }

  return (
    <>
      <NavGlobalStyles />
      <nav id="nav">
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <NavButtonWrapper>
          <NavButton className={"nav-margin-right"}>
            <NavLink
              href="https://github.com/status-im/translate.status.im#translate-status-into-your-language"
              target="_blank"
              rel="noopener noreferrer"
            >
              How to contribute
            </NavLink>
          </NavButton>
          <NavButton className="nav-button" type="primary">
            <NavLink href="https://status.im/get/" target="_blank" rel="noopener noreferrer">
              Get Status
            </NavLink>
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
            <MenuLink
              id="nav.how-to-contribute"
              text="How to contribute"
              href="https://github.com/status-im/translate.status.im#how-to-help-translate"
              onClick={handleCloseMenu}
            />
            <MenuLink
              id="nav.contributors"
              text="Contributors"
              href="https://github.com/status-im/translate.status.im#contributors"
              onClick={handleCloseMenu}
            />
            <MenuLink id="nav.aboutus" text="About us" href="https://statusnetwork.com/" onClick={handleCloseMenu} />
            <MenuLink id="nav.github" text="Github" href="https://github.com/status-im" onClick={handleCloseMenu} />
            <MenuLink id="nav.blog" text="Blog" href="https://our.status.im/" onClick={handleCloseMenu} />
          </BurgerMenu>
        </NavMobile>
      </nav>
    </>
  );
}

export default Nav;
