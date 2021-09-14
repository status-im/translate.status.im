import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { Line } from "rc-progress";
import styled from "styled-components/macro";

const CardFrame = styled.div`
  text-align: center;
  background: #fff;
  width: 80%;
  border-radius: 10px;
  margin: 10px auto 50px auto;
  padding-bottom: 35px;
  -webkit-box-shadow: 0px 10px 30px -9px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 10px 30px -9px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 10px 30px -9px rgba(0, 0, 0, 0.75);
`;

const CardBody = styled.div`
  padding-top: 20px;
`;

const LanguageTitle = styled.div`
  font-size: 3.1rem;
  font-weight: 500;
  padding: 0;
  margin: 0;
  line-height: 160%;

  @media (min-width: 1100px) {
    font-size: 2.1rem;
    padding: 0;
    margin: 0;
  }

  @media (max-width: 1099px) and (min-width: 921px) {
    font-size: 2.1rem;
    padding: 0;
    margin: 0;
  }

  @media (max-width: 920px) and (min-width: 600px) {
    font-size: 2.1rem;
    padding: 0;
    margin: 0;
  }

  @media (max-width: 599px) and (min-width: 0px) {
    font-size: 1.8rem;
    padding: 0;
    margin: 0;
  }
`;

const LanguageName = styled.div`
  font-size: 1.5rem;
  padding: 0;
  margin: 0;
  line-height: 160%;
`;

const LanguageProgress = styled.span`
  padding-top: 5px;
`;

const LanguagePercent = styled.span`
  margin-left: 20px;
  font-family: "Roboto";
`;

const LanguageWords = styled.div`
  margin: 1rem 0;
  font-size: 1rem;
  line-height: 160%;
`;

export const CardGroup = styled.div`
  display: grid;
  height: auto;
  grid-template-columns: repeat(3, 1fr);
  padding: 10px;

  @media (max-width: 920px) and (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr;
  }

  @media (max-width: 599px) and (min-width: 0px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

function CardLink({ children, url, ...props }) {
  return (
    <p>
      <a href={url} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    </p>
  );
}

function getProgressForLang(progressLang, lang) {
  let rval = progressLang.find(v => v["language_iso"] === lang);
  return rval === undefined ? 0 : rval["progress"] || 0;
}

function getWordsToDoForLang(progressLang, lang) {
  const rval = progressLang.find(v => v["language_iso"] === lang);
  return rval === undefined ? 0 : rval["words_to_do"] || 0;
}

function numberWithCommas(number) {
  if (number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else return number;
}

function LangCard(props) {
  const [cardItem, setCardItem] = useState(null);
  const [progressByLang, setProgressByLang] = useState(null);

  function setCardStateOnProps() {
    const { card, progress } = props;
    setCardItem(card);
    setProgressByLang(progress);
  }

  useEffect(() => {
    setCardStateOnProps();
  });

  let dappProgress = null;
  let dappWordsToDo = null;
  let websiteProgress = null;
  let websiteWordsToDo = null;

  if (typeof progressByLang !== "undefined" && progressByLang !== null && progressByLang.length !== 0) {
    dappProgress = getProgressForLang(progressByLang[0]["Status DApp"], cardItem.code);
    websiteProgress = getProgressForLang(progressByLang[1]["Status.im Website"], cardItem.code);

    dappWordsToDo = getWordsToDoForLang(progressByLang[0]["Status DApp"], cardItem.code);
    websiteWordsToDo = getWordsToDoForLang(progressByLang[1]["Status.im Website"], cardItem.code);
  }

  return (
    <CardFrame>
      {cardItem !== null ? (
        <CardBody>
          <LanguageTitle>{cardItem.lang_en}</LanguageTitle>
          <LanguageName>{cardItem.lang}</LanguageName>
          <LanguageProgress>
            <CardLink url={cardItem.app}>
              <FormattedMessage id="main.app-application" defaultMessage="Status DApp translation" />
            </CardLink>
            <Line
              percent={dappProgress}
              strokeWidth="3"
              trailWidth="3"
              strokeColor="#2db7f5"
              style={{ width: "50%" }}
            />
            <LanguagePercent>{dappProgress}%</LanguagePercent>
            <LanguageWords>{numberWithCommas(dappWordsToDo)} words to do</LanguageWords>
          </LanguageProgress>
          <LanguageProgress>
            <CardLink url={cardItem.website}>
              <FormattedMessage id="main.website-application" defaultMessage="Status.im website translation" />
            </CardLink>
            <Line
              percent={websiteProgress}
              strokeWidth="3"
              trailWidth="3"
              strokeColor="#2db7f5"
              style={{ width: "50%" }}
            />
            <LanguagePercent>{websiteProgress}%</LanguagePercent>
            <LanguageWords>{numberWithCommas(websiteWordsToDo)} words to do</LanguageWords>
          </LanguageProgress>
        </CardBody>
      ) : (
        ""
      )}
    </CardFrame>
  );
}

export default LangCard;
