import styled from "styled-components";
import { desktop, tablet } from "../media/media";

const StyledIconButton = styled.button`
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background: linear-gradient(180deg, #fe71fe 16.42%, #7199ff 100%);
  box-shadow: 0px -5px 0px -1px rgba(157, 45, 245, 0.25) inset;

  & > img {
    width: 17px;
  }

  &:active {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.25) 0%,
        rgba(255, 255, 255, 0.25) 100%
      ),
      linear-gradient(180deg, #fe71fe 16.42%, #7199ff 100%);
  }

  ${tablet} {
    width: 64px;
    height: 64px;
    & > img {
      width: 28px;
    }
  }
  ${desktop} {
    width: 94px;
    height: 94px;
    & > img {
      width: 41px;
    }
  }
`;
const IconButton = ({ icon, onClick }) => {
  return (
    <StyledIconButton onClick={onClick}>
      <img src={icon} alt="back icon" />
    </StyledIconButton>
  );
};

export default IconButton;
