import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({ theme, isBlack }) => (isBlack ? theme.colors.black : theme.colors.yellow)};
  color: ${({ theme, isBlack }) => (isBlack ? theme.colors.white : theme.colors.black)};
  font-weight: 700;
  border-radius: 1px;
  padding: 0 20px;
  padding: ${({ isHorizontalPadding }) => (isHorizontalPadding ? '10px 20px' : '0 20px')};
  border: none;
  cursor: pointer;
  outline: none;
  margin-right: ${({ isMarginRight }) => (isMarginRight ? '20px' : 0)};
  margin-top: ${({ isMarginTop }) => (isMarginTop ? '40px' : 0)};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabled};
  }
  &:disabled:hover {
    background-color: ${({ theme }) => theme.colors.disabled};
  }

  &:hover {
    background-color: ${({ theme, isBlack }) => (isBlack ? theme.colors.white : theme.colors.darkenYellow)};
    color: ${({ theme }) => theme.colors.black};
  }
`;
