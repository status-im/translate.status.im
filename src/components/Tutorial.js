import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import ScrollableAnchor from "react-scrollable-anchor";
import { Steps } from "antd";
import Section from "./Section";
import styled from "styled-components";
import { externalURLs } from "../constants/externalURLs";

const StepsContent = styled.div`
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 2px;
  background-color: #fafafa;
  height: 600px;
  text-align: center;

  @media (max-width: 1200px) {
    height: 580px;
  }

  @media (max-width: 920px) and (min-width: 600px) {
    height: 580px;
  }

  @media (max-width: 599px) and (min-width: 0px) {
    height: 420px;
  }
`;

const ImageResponsive = styled.img`
  height: 480px;

  @media (max-width: 1200px) {
    height: 450px;
  }

  @media (max-width: 920px) and (min-width: 600px) {
    width: 80%;
    height: auto;
  }

  @media (max-width: 599px) and (min-width: 0px) {
    width: 90%;
    height: auto;
  }
`;

const ImageResponsiveV2 = styled.img`
  width: 85%;
  height: auto;

  @media (min-width: 1700px) {
    width: auto;
    height: 550px;
  }
`;

const { Step } = Steps;

const steps = [
  {
    title: "Step 1",
    content: (
      <div style={{ marginBottom: 40 }}>
        <Section.StyledWrapper>
          <Section.Bold>
            <FormattedMessage id="main.step1" defaultMessage="Step 1 : " />
          </Section.Bold>
          <FormattedMessage
            id="main.step1-1"
            defaultMessage="In the language cards above, click a link you want to contribute (e.g. Status DApp translation) and sign up for Lokalise."
          />
        </Section.StyledWrapper>
        <ImageResponsive
          //eslint-disable-next-line no-undef
          src={require("../images/lokalise1.png")}
          alt="Lokalise Sign up"
        />
        <br />
        <br />
        <br />
      </div>
    ),
  },
  {
    title: "Step 2",
    content: (
      <div style={{ marginBottom: 40 }}>
        <Section.StyledWrapper>
          <Section.Bold>
            <FormattedMessage id="main.step2" defaultMessage="Step 2 : " />
          </Section.Bold>
          <FormattedMessage
            id="main.step2-1"
            defaultMessage="You will find a project that needs your help. Check out the progress and click 'WORDS TO DO (new words)` or 'UNVERIFIED (updated words)'."
          />
        </Section.StyledWrapper>
        <ImageResponsive
          //eslint-disable-next-line no-undef
          src={require("../images/lokalise2.png")}
          alt="Example Lokalise Usage"
        />
      </div>
    ),
  },
  {
    title: "Step 3",
    content: (
      <div style={{ marginBottom: 40 }}>
        <Section.StyledWrapper>
          <Section.Bold>
            <FormattedMessage id="main.step3" defaultMessage="Step 3 : " />
          </Section.Bold>
          <FormattedMessage id="main.step3-1" defaultMessage="Read this" />
          <Section.Link href={externalURLs.translationGuidelines} target="_blank" rel="noopener noreferrer">
            <FormattedMessage id="main.pullrequest-link" defaultMessage="translation guidelines" />
          </Section.Link>
          <FormattedMessage id="main.andstart" defaultMessage="and let's get it started!" />
        </Section.StyledWrapper>
        <ImageResponsiveV2
          //eslint-disable-next-line no-undef
          src={require("../images/lokalise3.png")}
          alt="Example Lokalise Usage"
        />
      </div>
    ),
  },
];

function Tutorial() {
  const [current, setCurrent] = useState(0);
  const onChange = current => {
    setCurrent(current);
  };

  return (
    <Section.Frame>
      <ScrollableAnchor id={"tutorial"}>
        <Section.Body>
          <Section.TitleII style={{ fontWeight: 400 }}>
            <FormattedMessage id="main.how-to-contribute" defaultMessage="How to Contribute?" />
          </Section.TitleII>
          <Section.TitleIII style={{ fontWeight: 400 }}>
            <FormattedMessage id="main.app-and-website" defaultMessage="App and Website" />
          </Section.TitleIII>
          <Section.StyledWrapper style={{ marginBottom: 80 }}>
            <FormattedMessage
              id="main.before-lokalise"
              defaultMessage="You can translate the Status app and website into your language with"
            />{" "}
            <Section.Link href={externalURLs.lokalise} target="_blank" rel="noopener noreferrer">
              <FormattedMessage id="main.lokalise" defaultMessage="Lokalise! " />
            </Section.Link>
            <FormattedMessage
              id="main.after-lokalise"
              defaultMessage="Lokalise automates all the translation workflow and is very easy to use. You can find the simple 3 steps to start the translations as below."
            />
          </Section.StyledWrapper>
          <Steps current={current} onChange={onChange}>
            {steps.map(item => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <StepsContent style={{ marginTop: 80 }}>{steps[current].content}</StepsContent>
        </Section.Body>
      </ScrollableAnchor>
    </Section.Frame>
  );
}

export default Tutorial;
