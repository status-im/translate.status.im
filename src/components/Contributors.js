import React from "react";
import { externalURLs } from "../constants/externalURLs";
import Section from "./Section";

function Contributors() {
  return (
    <Section.Frame>
      <Section.Body>
        <Section.StyledTitle>Shout out to these open-source contributors!</Section.StyledTitle>
        <div style={{ margin: 0 }}>
          <Section.StyledTitleIII>
            <Section.Link href={externalURLs.contributors} target="_blank" rel="noopener noreferrer">
              Contributors (Github)
            </Section.Link>
          </Section.StyledTitleIII>
        </div>
      </Section.Body>
    </Section.Frame>
  );
}

export default Contributors;
