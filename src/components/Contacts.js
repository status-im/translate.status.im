import React from "react";
import { FormattedMessage } from "react-intl";
import Section from "./Section";
import { externalURLs } from "../constants/externalURLs";

function Contacts() {
  return (
    <Section.Frame>
      <Section.Body id="contact-us">
        <Section.TitleII>
          <FormattedMessage id="main.contact" defaultMessage="Contact Us" />
        </Section.TitleII>
        <Section.Wrapper style={{ margin: 0 }}>
          <Section.StyledWrapper>
            <FormattedMessage
              id="main.contact-explanation"
              defaultMessage="Do you have any questions? Don't hesitate to contact us!"
            />
          </Section.StyledWrapper>
          <Section.StyledWrapper>
            <Section.Link href={externalURLs.mailToStatus}>translate@status.im</Section.Link>
          </Section.StyledWrapper>
          <Section.StyledWrapper>
            <Section.Link href={externalURLs.statusTranslate} target="_blank" rel="noopener noreferrer">
              <FormattedMessage id="main.public-chat" defaultMessage="#Status-translate public chat" />
            </Section.Link>
          </Section.StyledWrapper>
        </Section.Wrapper>
      </Section.Body>
    </Section.Frame>
  );
}

export default Contacts;
