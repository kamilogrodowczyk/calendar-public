import styled from 'styled-components';
import Modal from 'react-modal';
import { Button as ModalButton } from 'components/atoms/Button.styles';

export const Wrapper = styled(Modal)`
  width: 400px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  display: grid;
  justify-items: center;
  align-items: flex-end;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 10px;
`;

export const Button = styled(ModalButton)`
  padding: 10px 20px;
`;
