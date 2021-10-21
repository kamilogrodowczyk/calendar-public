import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-rows: 5fr 1fr;
  background-color: ${({ theme }) => theme.colors.white};
  width: 25%;
  height: 90%;
  position: relative;
  opacity: ${({ isOpacity }) => (isOpacity ? 1 : 0)};
  user-select: none;

  @media (max-width: 1400px) {
    position: absolute;
    right: 0;
    width: 40%;
    z-index: ${({ isOpacity }) => (isOpacity ? 1 : -1)};
  }
`;
