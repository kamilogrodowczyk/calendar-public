import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 30px;
  width: 20%;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.white};

  select {
    appearance: none;
    width: 100%;
    height: inherit;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.white};
    border: none;
    outline: none;
    text-indent: 10px;
    box-sizing: content-box;
  }

  option {
    color: ${({ theme }) => theme.colors.black};
  }

  &::before {
    content: '';
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    clip-path: polygon(50% 100%, 3% 0, 100% 0);
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
