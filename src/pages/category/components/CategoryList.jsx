import styled from "styled-components";
import Button from "../../../general/components/Button";
import { useNavigate } from "react-router-dom";
import useGameStore from "../../../store/useGameStore";
import { desktop, tablet } from "../../../general/media/media";

const StyledCategoryList = styled.ul`
  padding-top: 100px;
  display: grid;
  gap: 16px;

  ${tablet} {
    padding-top: 114px;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 32px;
    row-gap: 32px;
  }

  ${desktop} {
    padding-top: 155px;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 50px;
  }
`;

const StyledItem = styled.li``;

const CategoryList = () => {
  const navigate = useNavigate();
  const categories = useGameStore(state => Object.keys(state.categories));
  const setCategory = useGameStore(state => state.setCategory);

  const handleCategoryClick = category => {
    setCategory(category);
    navigate("/game");
  };
  return (
    <StyledCategoryList>
      {categories.map(category => (
        <StyledItem key={category}>
          <Button
            onClick={() => handleCategoryClick(category)}
            variant={"rectangular"}
          >
            {category}
          </Button>
        </StyledItem>
      ))}
    </StyledCategoryList>
  );
};

export default CategoryList;
