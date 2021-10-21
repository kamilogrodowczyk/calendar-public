import styled from 'styled-components';
import { Button } from 'components/atoms/Button.styles';

export const StyledBottom = styled.div`
  width: 90%;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;

  & > p {
    margin: 0;
    color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

export const StyledButton = styled(Button)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.black};
  padding: 0;
  margin-right: 20px;

  &:first-of-type {
    color: ${({ theme }) => theme.colors.yellow};
  }

  &:hover {
    background-color: inherit;
  }
`;
