import styled from "styled-components";
import useGameStore from "../../../store/useGameStore";
import splittedPhrase from "../../../general/utils/splittedPhrase";
import { desktop, tablet } from "../../../general/media/media";

// StyledLetters komponenti
const StyledLetters = styled.div`
  margin-top: 92px;

  ${tablet} {
    margin-top: 111px;
  }

  ${desktop} {
    margin-top: 88px;
  }
`;

// Harflar uchun stilizatsiya
const Letter = styled.div`
  display: flex;
  width: 40px;
  height: 66px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: ${props => props.theme.colors.blue};
  box-shadow: 0px 1px 0px 6px #3c74ff inset, 0px -2px 0px 3px #140e66 inset;
  visibility: ${props => (props.$hide ? "hidden" : "visible")};
  color: ${props => props.theme.colors.white};
  font-size: 40px;
  letter-spacing: 2px;
  text-transform: uppercase;

  ${tablet} {
    width: 88px;
    height: 112px;
    border-radius: 32px;
    font-size: 64px;
  }

  ${desktop} {
    width: 112px;
    height: 128px;
    border-radius: 40px;
  }
`;

// O'ynash qatorini stilizatsiya
const Row = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    justify-content: ${props => (props.$start ? "start" : "center")};
  }
  gap: 8px;
  margin-bottom: 12px;

  ${tablet} {
    gap: 12px;
    margin: 16px;
  }

  ${desktop} {
    gap: 16px;
  }
`;

// Letters komponenti
const Letters = () => {
  // O'yin ma'lumotlarini o'qib olish
  const phrase = useGameStore(state => state.phrase);
  const pressedKeys = useGameStore(state => state.pressedKeys);
  const splitted = splittedPhrase(phrase);

  // O'yin holatini chiqarish
  return (
    <StyledLetters>
      {splitted.map((portion, i) => {
        return (
          <Row key={i} $start={portion[0] === "/n"}>
            {portion.map(
              (p, z) =>
                p !== "/n" && (
                  <Letter $hide={!p} key={z}>
                    {pressedKeys.includes(p?.toLowerCase()) && p}
                  </Letter>
                )
            )}
          </Row>
        );
      })}
    </StyledLetters>
  );
};

export default Letters;
