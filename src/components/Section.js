import { Button as AntdButton } from "antd";

import styled from "styled-components/macro";

const blueAnchor = "#1890ff";

// main
const Frame = styled.div`
  position: relative;
  z-index: 3;
  overflow: hidden;

  & a:link,
  & a:visited {
    text-decoration: none;
    color: rgb(151, 151, 151);
  }

  & a:hover {
    color: rgb(92, 94, 255);
    text-decoration: underline;
  }
`;

// main section
const Body = styled.div`
  width: 70%;
  margin: 20px auto;
  display: grid;
  grid-template-columns: 2fr 3fr;
  align-items: center;

  @media (min-width: 1100px) {
    width: 90%;
    margin: 50px auto;
    display: grid;
    grid-template-columns: 1fr;
  }

  @media (max-width: 599px) and (min-width: 0px) {
    font-size: 28px;
  }

  @media (max-width: 1099px) and (min-width: 921px) {
    width: 90%;
    margin: 50px;
    display: grid;
    grid-template-columns: 1fr;
  }

  @media (max-width: 920px) and (min-width: 600px) {
    width: 90%;
    margin: 50px;
    display: grid;
    grid-template-columns: 1fr;
  }

  @media (max-width: 599px) and (min-width: 0px) {
    width: 90%;
    padding: 10px 0;
    margin: 50px auto;
    display: grid;
    grid-template-columns: 1fr;
  }
`;

// main div mini wrapper
const Wrapper = styled.div`
  text-align: center;
  margin-top: 80px;
`;

//main section div p
const StyledWrapper = styled.p`
  padding: 0px 90px;
  font-size: 1.3rem;
  line-height: 160%;

  @media (max-width: 599px) and (min-width: 0px) {
    margin: 0;
    padding: 10px;
    font-size: 1rem;
  }
`;

// main div h1
const Title = styled.h1`
  font-size: 3rem;

  @media (max-width: 599px) and (min-width: 0px) {
    font-size: 1.5rem;
  }
`;

const TitleII = styled.h2`
  font-size: 3rem;
  color: black;
  text-transform: uppercase;
  line-height: 2rem;
  text-align: center;

  @media (max-width: 920px) and (min-width: 600px) {
    font-size: 2.2rem;
  }

  @media (max-width: 599px) and (min-width: 0px) {
    font-size: 1.6rem;
  }
`;

const StyledTitle = styled.p`
  color: #9e9e9e;
  text-align: center;
  font-size: 36px;

  @media (max-width: 599px) and (min-width: 0px) {
    font-size: 28px;
  }
`;

const TitleIII = styled.h3`
  font-size: 2rem;
  text-align: center;
  color: #ccc;
  margin-right: 15px;

  @media (max-width: 920px) and (min-width: 600px) {
    font-size: 1.5rem;
  }

  @media (max-width: 599px) and (min-width: 0px) {
    font-size: 1.5rem;
  }
`;

const StyledTitleIII = styled(TitleIII)`
  color: ${blueAnchor};
`;

// inline styling in main js
const Flex = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

// className used in mainjs
const SortWrapper = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Button = styled(AntdButton)`
  margin: 20px;
  font-size: 20px;
  padding: 6px 20px;
  height: 50px;

  @media (max-width: 599px) and (min-width: 0px) {
    margin: 10px;
  }
`;

const Link = styled.a`
  color: ${blueAnchor} !important;
  cursor: pointer;
`;

// main section div b
const Bold = styled.b`
  color: rgb(0, 99, 248);
  font-size: 1.5rem;
`;

// main div p
const Text = styled.p`
  line-hight: 160%;
  font-size: 1.3rem;

  @media (max-width: 599px) and (min-width: 0px) {
    font-size: 1rem;
  }
`;

export default {
  Frame,
  Body,
  Wrapper,
  StyledWrapper,
  SortWrapper,
  Title,
  StyledTitle,
  TitleII,
  TitleIII,
  StyledTitleIII,
  Flex,
  Button,
  Link,
  Bold,
  Text,
};
