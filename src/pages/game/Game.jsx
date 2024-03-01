import styled from "styled-components";
import Container from "../../general/components/Container";
import Header from "./components/Header";
import Letters from "./components/Letters";
import Keyboard from "./components/Keyboard";
import Modal from "./components/Modal";
import { createPortal } from "react-dom";
import useGameStore from "../../store/useGameStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { desktop, tablet } from "../../general/media/media";
import splittedPhrase from "../../general/utils/splittedPhrase";

// Stilizatsiya
const StyledContainer = styled(Container)`
  padding-top: 32px;

  ${tablet} {
    padding-top: 61px;
  }
  ${desktop} {
    padding-top: 80px;
  }
`;

// Game komponenti
const Game = () => {
  // Foydalanuvchining yozilgan frazasi
  const phrase = useGameStore(state => state.phrase);
  // Saytga navigatsiya uchun hook
  const navigate = useNavigate();

  // O'yin boshlanayotganda, agar fraza mavjud bo'lmasa, foydalanuvchi avtomatik ravishda bosh sahifaga yo'naltiriladi
  useEffect(() => {
    if (!phrase) {
      navigate("/");
    }
  }, []);

  return (
    <>
      {/* O'yin konteyneri */}
      <StyledContainer bgBlur>
        {/* Sarlavha */}
        <Header />
        {/* Harflar */}
        <Letters />
        {/* Klaviatura */}
        <Keyboard />
      </StyledContainer>
      {/* Modal oyna */}
      {createPortal(<Modal />, document.body)}
    </>
  );
};

export default Game;
