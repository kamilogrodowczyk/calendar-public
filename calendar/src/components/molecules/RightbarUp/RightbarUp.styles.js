import styled from 'styled-components';

export const StyledHeading = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  & > * {
    top: -15px;
    position: absolute;
  }
`;

export const Publication = styled.p`
  padding: 5px 20px;
  background-color: ${({ theme }) => theme.colors.yellow};
  white-space: nowrap;
  left: 50%;
  transform: translateX(-50%);

  & > span {
    font-weight: 700;
  }
`;

const Arrow = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 50%;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  opacity: 0;
  /* display: ${({ isOpacity }) => (isOpacity ? 'none' : 'flex')}; */
`;

export const ArrowLeft = styled(Arrow)`
  left: 1%;

  & > svg {
    fill: white;
    width: 15px;
    height: 15px;
    transform: rotate(180deg);
  }
`;
export const ArrowRight = styled(Arrow)`
  left: 10%;

  & > svg {
    fill: white;
    width: 15px;
    height: 15px;
  }
`;
export const ArrowCancel = styled(Arrow)`
  right: 1%;
  opacity: 1;

  & > svg {
    fill: white;
    width: 15px;
    height: 15px;
  }
`;
