import styled from "styled-components";
import { desktop, tablet } from "../../../general/media/media";

// Sahifada ko'rsatiladigan matnlar
const items = [
  {
    id: 1,
    title: "Choose a category",
    body: `First, choose a word category, like animals or movies. The computer
    then randomly selects a secret word from that topic and shows you
    blanks for each letter of the word.`,
  },
  {
    id: 2,
    title: "Guess letters",
    body: `Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses.`,
  },
  {
    id: 3,
    title: "Win or lose",
    body: `You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.`,
  },
];

// Stilizatsiya uchun foydalanilgan komponentlar
const StyledList = styled.ul`
  margin-top: 79px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${desktop} {
    flex-direction: row;
    gap: 32px;
    margin-top: 100px;
  }

  ${desktop} {
    margin-top: 64px;
  }
`;

const StyledItem = styled.li`
  padding: 32px;
  border-radius: 20px;
  background: ${props => props.theme.colors.white};

  ${tablet} {
    display: flex;
    align-items: center;
    gap: 40px;
  }
  ${desktop} {
    flex-direction: column;
    text-align: center;
    padding: 60px 48px;
    border-radius: 40px;
  }
`;

const StyledParagraph = styled.p`
  color: #887dc0;
  letter-spacing: 0.8px;

  ${tablet} {
    font-size: 20px;
    letter-spacing: 1px;
  }
  ${desktop} {
    font-size: 26px;
    letter-spacing: 1.3px;
  }
`;

const StyledTitle = styled.h4`
  display: flex;
  margin-bottom: 16px;
  gap: 16px;
  color: ${props => props.theme.colors.navy};
  font-size: 24px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  & > span {
    color: ${props => props.theme.colors.blue};
  }

  ${tablet} {
    & > span {
      display: none;
    }

    font-size: 40px;
    letter-spacing: 2px;
  }

  ${desktop} {
    font-size: 48px;
    letter-spacing: 2.4px;
    margin-bottom: 40px;
    display: block;
  }
`;

const StyledIndex = styled.span`
  display: none;
  ${tablet} {
    display: block;
    color: ${props => props.theme.colors.blue};
    font-size: 88px;
  }
`;

// Matnlar ro'yxati uchun komponent
const HowToList = () => {
  return (
    <StyledList>
      {items.map(item => (
        <StyledItem key={item.id}>
          <StyledIndex>0{item.id}</StyledIndex>
          <div>
            <StyledTitle>
              <span>0{item.id}</span>
              {item.title}
            </StyledTitle>
            <StyledParagraph>{item.body}</StyledParagraph>
          </div>
        </StyledItem>
      ))}
    </StyledList>
  );
};

export default HowToList;
