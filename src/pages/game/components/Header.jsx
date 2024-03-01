import styled from "styled-components";
import IconButton from "../../../general/components/IconButton";
import Health from "./Health";
import useModal from "../../../general/hooks/useModal";
import { desktop, tablet } from "../../../general/media/media";
import useGameStore from "../../../store/useGameStore";

// Headerni stilizatsiya qilish uchun styled-component
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// O'yin sarlavhasini stilizatsiya qilish uchun styled-component
const StyledTitle = styled.h3`
  color: ${props => props.theme.colors.white};
  font-size: 40px;
  letter-spacing: -0.2px;

  ${tablet} {
    font-size: 48px;
    letter-spacing: 2.4px;
  }

  ${desktop} {
    font-size: 88px;
  }
`;

// Headerning chap qismidagi komponentlar uchun stilizatsiya
const StyledLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  ${tablet} {
    gap: 32px;
  }
  ${desktop} {
    gap: 57px;
  }
`;

// Header komponenti
const Header = () => {
  // useModal hook orqali modalni chiqarish uchun funksional sozlangan
  const { showModal } = useModal();
  // useGameStore hook orqali o'yin ma'lumotlarini olish
  const category = useGameStore(state => state.category);

  return (
    <StyledHeader>
      {/* O'yin menyusini ochish uchun IconButton komponenti */}
      <StyledLeft>
        <IconButton onClick={showModal} icon={"/images/icon-menu.svg"} />
        {/* O'yin sarlavhasini ko'rsatish */}
        <StyledTitle>{category}</StyledTitle>
      </StyledLeft>
      {/* Imkoniyatni ko'rsatish */}
      <Health />
    </StyledHeader>
  );
};

export default Header;
