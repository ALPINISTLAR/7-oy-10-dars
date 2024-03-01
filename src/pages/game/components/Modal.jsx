import styled from "styled-components";
import Title from "../../../general/components/Title";
import Button from "../../../general/components/Button";
import { useNavigate } from "react-router-dom";
import useModal from "../../../general/hooks/useModal";
import useGameStore from "../../../store/useGameStore";
import { tablet } from "../../../general/media/media";

// Stilizatsiya
const StyledDialog = styled.dialog`
  position: relative;
  padding: 0 26px 0 25px;
  min-width: 100%;
  min-height: 100%;
  background: inherit;
  color: white;
  border: none;

  &::backdrop {
    background: linear-gradient(
      180deg,
      rgba(26, 4, 58, 0.75) 0%,
      rgba(21, 18, 120, 0.75) 70.31%,
      rgba(43, 22, 119, 0.75) 100%
    );
  }
`;

const StyledModal = styled.div`
  width: calc(100% - 51px);
  height: 445px;

  border-radius: 48px;
  background: linear-gradient(180deg, #344aba 0%, rgba(0, 20, 121, 0.83) 100%);
  box-shadow: 0px 6px 0px 8px #2463ff inset, 0px -8px 0px 4px #140e66 inset;
  margin-top: 52px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  ${tablet} {
    max-width: 592px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const StyledTitle = styled(Title)`
  font-size: 94px;
  -webkit-text-stroke-width: 4px;
  letter-spacing: -0.47px;
  margin-top: -52px;
  margin-bottom: 43px;

  ${tablet} {
    font-size: 134px;
    letter-spacing: -0.67px;
    margin-top: -89px;
  }
`;

const StyledButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 34px;
`;

// Modal komponenti
const Modal = () => {
  // O'yin holati, o'yin qayta boshlash va navigatsiyaga qo'shilish uchun foydalanilgan hooklar
  const gameStatus = useGameStore(state => state.gameStatus);
  const playAgain = useGameStore(state => state.playAgain);
  const quitGame = useGameStore(state => state.quitGame);
  const navigate = useNavigate();
  const { closeModal } = useModal();

  // Modal oynani chiqarish
  return (
    <StyledDialog id="dialog">
      <StyledModal>
        <StyledTitle>{title[gameStatus]}</StyledTitle>
        <StyledButtons>
          {gameStatus === "playing" ? (
            <Button onClick={closeModal} variant={"circular"}>
              continue
            </Button>
          ) : (
            <Button onClick={playAgain} variant={"circular"}>
              play again
            </Button>
          )}
          <Button
            onClick={() => {
              quitGame();
              navigate("/category");
            }}
            variant={"circular"}
          >
            new category
          </Button>
          <Button
            onClick={() => {
              quitGame();
              navigate("/");
            }}
            variant={"circular"}
            danger
          >
            quit game
          </Button>
        </StyledButtons>
      </StyledModal>
    </StyledDialog>
  );
};

export default Modal;
