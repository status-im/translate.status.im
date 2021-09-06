import React from "react";
import SocialNetworks from "./SocialNetworks";
import styled from "styled-components/macro";
import { externalURLs } from "../constants/externalURLs";

const FooterFrame = styled.footer`
  background: #2b2b2b;
  color: #fff;
  padding: 70px;
  margin-top: 80px;

  @media (max-width: 599px) and (min-width: 0px) {
    padding: 20px 0;
  }
`;

const FooterTitle = styled.h2`
  font-size: 36px;

  @media (max-width: 420px) {
    font-size: 24px;
    text-align: center;
  }
`;

const FooterSubtitle = styled.h3`
  font-size: 30px;
  padding-top: 30px;
  color: #9e9e9e;

  @media (max-width: 420px) {
    font-size: 20px;
    margin-left: 20px;
  }
`;

const FooterBody = styled.div`
  margin-left: 80px;

  @media (max-width: 599px) and (min-width: 0px) {
    margin-left: 50px;
  }

  @media (max-width: 420px) {
    margin-left: 0;
  }
`;

const FooterBottom = styled.div`
  margin-top: 100px;
  margin-left: 80px;
  padding-bottom: 50px;

  & a {
    font-size: 16px;
    color: #9e9e9e;
    font-weight: 600;
    margin-bottom: 5px;
    text-decoration: none;
  }

  @media (max-width: 420px) {
    margin-left: 30px;
  }
`;

function Footer() {
  return (
    <FooterFrame>
      <FooterBody>
        <FooterTitle>The Status Network</FooterTitle>
        <FooterSubtitle>Get in touch</FooterSubtitle>
        <SocialNetworks />
      </FooterBody>
      <FooterBottom>
        <a href={externalURLs.privacyPolicy} rel="noopener noreferrer" target="_blank">
          Privacy Policy
        </a>
      </FooterBottom>
    </FooterFrame>
  );
}

export default Footer;
