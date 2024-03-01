import styled from "styled-components";
import IconButton from "./IconButton";
import Title from "./Title";
import { useNavigate } from "react-router-dom";
import { desktop, tablet } from "../media/media";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Block = styled.div`
  display: none;
  ${tablet} {
    display: block;
    width: 64px;
    height: 64px;
  }
  ${desktop} {
    display: block;
    width: 94px;
    height: 94px;
  }
`;

const BackHeader = ({ icon, title }) => {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <IconButton onClick={() => navigate(-1)} icon={icon} />
      <Title>{title}</Title>
      <Block></Block>
    </StyledHeader>
  );
};

export default BackHeader;
