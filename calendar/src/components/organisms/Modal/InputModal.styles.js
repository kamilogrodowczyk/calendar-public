import styled from 'styled-components';
import Modal from 'react-modal';
import { Button as ButtonDefault } from 'components/atoms/Button.styles';
import { ErrorParagraph as DefaultErrorParagraph } from 'components/atoms/Paragraph.styles';

export const Wrapper = styled(Modal)`
  width: 700px;
  height: 700px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  /* display: grid;
  gap: 3vh;
  justify-items: center;
  align-items: center;
  align-content: center; */
  background-color: ${({ theme }) => theme.colors.black};
  letter-spacing: 1px;

  &:focus {
    outline: none;
  }
`;

export const Form = styled.form`
  display: grid;
  width: 100%;
  height: 100%;
  justify-items: center;
  align-items: center;
  align-content: center;
  gap: 3vh;
`;

export const Input = styled.input`
  width: 50%;
  height: 30px;
  border-radius: 20px;
  border: none;
  padding: 0 10px;
  color: ${({ isWhite, theme }) => (isWhite ? theme.colors.white : theme.colors.black)};

  &:focus {
    outline: none;
    box-shadow: rgba(255, 255, 255, 0.2) 0px 7px 29px 0px;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  gap: 10px;
`;

export const DisabledInput = styled(Input)`
  background: #aaa;
  cursor: not-allowed;
  caret-color: transparent;
  pointer-events: none;
  user-select: none;
  opacity: 0;
  height: 0px;
  width: 0px;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const Textarea = styled(Input)`
  height: 100px;
  padding: 10px 10px;
`;

export const Button = styled(ButtonDefault)`
  padding: 10px 20px;
`;

export const ErrorParagraph = styled(DefaultErrorParagraph)`
  width: 40%;
  text-align: center;
`;
