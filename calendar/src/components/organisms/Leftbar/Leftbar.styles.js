import styled from 'styled-components';
import { Paragraph as DefaultParagraph } from 'components/atoms/Paragraph.styles';
import { Input as DefaultInput } from '../Modal/InputModal.styles';
import { Button } from 'components/atoms/Button.styles';

export const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.yellow};
  width: 20%;
  height: 90%;
  grid-template-rows: 3fr 1fr;

  @media (max-width: 1400px) {
    opacity: ${({ isOpacity }) => (isOpacity ? 0 : 1)};
    position: absolute;
    left: 0;
    width: 25%;
    z-index: ${({ isOpacity }) => (isOpacity ? 0 : 1)};
  }
`;

export const AdminWrapper = styled.div`
  height: 100%;
  padding-top: 50px;
  width: 70%;
  display: grid;
  align-content: space-between;
`;

export const CompanyWrapper = styled.div`
  margin-bottom: 1.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    font-weight: 700;
    cursor: pointer;
  }
`;

export const Input = styled(DefaultInput)`
  width: 100%;
`;

export const Paragraph = styled(DefaultParagraph)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding: 5px 5px;
  width: 100%;
  & > svg {
    opacity: 0;
    margin-right: 5px;
  }

  &:hover > svg {
    opacity: 1;
  }
`;

export const LeftbarButton = styled(Button)`
  position: absolute;
  left: -35px;
  top: 10%;
  transform: rotate(90deg);
  width: 100px;
  height: 30px;
  z-index: 2;
  border: solid 2px black;

  @media (min-width: 1400px) {
    opacity: 0;
  }
`;
