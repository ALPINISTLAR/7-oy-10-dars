import styled from "styled-components";
import Container from "../../general/components/Container";
import BackHeader from "../../general/components/BackHeader";
import CategoryList from "./components/CategoryList";
import { desktop, tablet } from "../../general/media/media";

const StyledContainer = styled(Container)`
  padding-top: 32px;
  padding-bottom: 32px;

  ${tablet} {
    padding-top: 61px;
  }

  ${desktop} {
    padding-top: 80px;
  }
`;

const Category = () => {
  return (
    <StyledContainer bgBlur>
      <BackHeader icon={"/images/icon-back.svg"} title={"Pick a Category"} />
      <CategoryList />
    </StyledContainer>
  );
};

export default Category;
