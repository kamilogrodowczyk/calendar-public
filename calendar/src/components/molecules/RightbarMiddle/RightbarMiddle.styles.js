import styled from 'styled-components';
import { Button as DefaultButton } from 'components/atoms/Button.styles';

export const StyledText = styled.div`
  width: 90%;
  height: 90%;
  display: grid;
  margin: 0 auto;
  align-content: flex-start;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 30vh;
  margin-bottom: 1.5rem;
  &:hover {
    opacity: 0.8;
  }
  &:hover + button {
    opacity: 1;
  }
`;

export const Button = styled(DefaultButton)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  padding: 10px 30px;
  &:hover {
    opacity: 1;
  }
`;

export const QuestionElement = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 40%;
  background-color: ${({ theme }) => theme.colors.white};
  display: ${({ isDisplay }) => (isDisplay ? 'grid' : 'none')};
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;

  & > div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const AcceptElement = styled(QuestionElement)`
  display: ${({ isDisplayAnswer }) => (isDisplayAnswer ? 'grid' : 'none')};
  height: 100%;
  width: 100%;
  align-content: center;
  gap: 3vh;
`;

export const FileInput = styled.input`
  & {
    color: transparent;
    width: 30%;
  }
  &::-webkit-file-upload-button {
    visibility: hidden;
    display: none;
    color: transparent;
  }
  &::before {
    content: 'Tak';
    color: black;
    display: inline-block;
    background-color: ${({ theme }) => theme.colors.yellow};
    border-radius: 1px;
    padding: 1px 20px;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    text-shadow: 1px 1px #fff;
    font-weight: 700;
    border: none;
    cursor: pointer;
    outline: none;
    text-shadow: none;
  }
  &:hover::before {
    background-color: ${({ theme }) => theme.colors.darkenYellow};
  }
`;
