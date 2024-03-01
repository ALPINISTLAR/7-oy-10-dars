import styled from "styled-components";
import { desktop, tablet } from "../media/media";

const StyledContainer = styled.div`
  min-height: 100%;
  padding-left: 25px;
  padding-right: 26px;
  background: ${props =>
    props.$bgBlur
      ? `linear-gradient(
      180deg,
      rgba(26, 4, 58, 0.75) 0%,
      rgba(21, 18, 120, 0.75) 70.31%,
      rgba(43, 22, 119, 0.75) 100%
    ),
    url(/images/background-mobile.svg) no-repeat center/cover`
      : `url(/images/background-mobile.svg) no-repeat center/cover`};

  ${tablet} {
    padding-left: 40px;
    padding-right: 48px;

    background: ${props =>
      props.$bgBlur
        ? `linear-gradient(
      180deg,
      rgba(26, 4, 58, 0.75) 0%,
      rgba(21, 18, 120, 0.75) 70.31%,
      rgba(43, 22, 119, 0.75) 100%
    ),
    url(/images/background-tablet.svg) no-repeat center/cover`
        : `url(/images/background-tablet.svg) no-repeat center/cover`};
  }

  ${desktop} {
    padding-left: 112px;
    padding-right: 112px;

    background: ${props =>
      props.$bgBlur
        ? `linear-gradient(
      180deg,
      rgba(26, 4, 58, 0.75) 0%,
      rgba(21, 18, 120, 0.75) 70.31%,
      rgba(43, 22, 119, 0.75) 100%
    ),
    url(/images/background-desktop.svg) no-repeat center/cover`
        : `url(/images/background-desktop.svg) no-repeat center/cover`};
  }
`;

const Container = ({ children, className, bgBlur }) => {
  return (
    <StyledContainer $bgBlur={bgBlur} className={className}>
      {children}
    </StyledContainer>
  );
};

export default Container;
