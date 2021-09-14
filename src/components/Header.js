import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components/macro";
import worldMapImg from "../images/world-map.png";

const HeaderFrame = styled.header`
  background: url(${worldMapImg});
  background-repeat: no-repeat;
  position: relative;
  background-size: 90% 100%;
  background-position: center;
  background-origin: content-box;
  padding-top: 80px;
  height: 700px;

  & a:link,
  & a:visited {
    text-decoration: none;
    color: #4360df;
  }

  & strong {
    font-weight: bolder;
    color: #4360df;
  }

  & a:hover {
    font-weight: bold;
    text-decoration: underline;
  }

  @media (max-width: 1099px) and (min-width: 921px) {
    height: 500px;
  }

  @media (max-width: 920px) and (min-width: 600px) {
    height: 450px;
  }

  @media (max-width: 599px) and (min-width: 0px) {
    height: 350px;
  }
`;

const HeaderBody = styled.div`
  position: relative;
  display: grid;
  widtht 80%;
  margin: 0 auto;
  align-items: center;
  color: #222;

  @media (min-width: 1100px) {
    width: 80%;
  }

  @media (max-width: 1099px) and (min-width: 921px) {
    width: 85%;
    grid-template-columns: 1fr;
  }

  @media (max-width: 920px) and (min-width: 600px) {
    width: 75%;
    grid-template-columns: 1fr;
  }

  @media (max-width: 599px) and (min-width: 0px) {
    width: 85%;
    grid-template-columns: 1fr;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 4rem;
  font-weight: 400;
  padding-top: 7rem;
  text-align: center;

  @media (min-width: 1100px) {
    padding-top: 6rem;
    font-size: 4rem;
  }

  @media (max-width: 1099px) and (min-width: 921px) {
    padding-top: 1.5rem;
    font-size: 4rem;
  }

  @media (max-width: 920px) and (min-width: 600px) {
    padding-top: 1.5rem;
    font-size: 3rem;
  }

  @media (max-width: 599px) and (min-width: 0px) {
    padding-top: 1rem;
    font-size: 1.8rem;
    border: none;
  }
`;

const HeaderText = styled.p`
  font-size: 1.3rem;
  font-weight: lighter;
  margin: 10px auto;
  align-items: center;
  text-align: center;
  line-height: 160%;

  @media (max-width: 599px) and (min-width: 0px) {
    font-size: 1rem;
    padding-left: 0px;
  }
`;

const HeaderCTA = styled.div`
  margin-top: 20px;

  & a:hover {
    font-weight: bold;
    text-decoration: underline;
  }

  @media (max-width: 599px) and (min-width: 0px) {
    margin-top: 5px;
  }
`;

function Header() {
  return (
    <HeaderFrame>
      <HeaderBody>
        <HeaderTitle>
          <FormattedMessage id="header.main-1" defaultMessage="Translate Status" />
          <br />
          <FormattedMessage id="header.main-2" defaultMessage="into Your Language" />
        </HeaderTitle>
        <HeaderText>
          <FormattedMessage id="header.status" defaultMessage="Status" />
          <FormattedMessage
            id="header.status-explanation-1"
            defaultMessage=" is completely open source and made by contributors all over the world."
          />
          <br />
          <FormattedMessage
            id="header.status-explanation-2"
            defaultMessage="Your translations can help more people utilize our secure, censorship-resistant service"
          />
        </HeaderText>
        <HeaderCTA>
          <HeaderText>
            <a href="#tutorial">
              <FormattedMessage id="header.howtocontribute" defaultMessage="How to contribute?" />
            </a>
          </HeaderText>
        </HeaderCTA>
      </HeaderBody>
    </HeaderFrame>
  );
}

export default Header;
