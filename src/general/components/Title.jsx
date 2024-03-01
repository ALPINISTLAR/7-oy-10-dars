import React from "react";
import styled from "styled-components";
import { desktop, tablet } from "../media/media";

const StyledTitle = styled.h3`
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #243041;
  font-size: 48px;
  letter-spacing: 2.4px;
  background: linear-gradient(180deg, #67b6ff 16.42%, #fff 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;

  ${tablet} {
    font-size: 104px;
    letter-spacing: -0.57px;
  }

  ${desktop} {
    font-size: 136px;
    letter-spacing: -0.68px;
  }
`;

const Title = ({ children, className }) => {
  return <StyledTitle className={className}>{children}</StyledTitle>;
};

export default Title;
