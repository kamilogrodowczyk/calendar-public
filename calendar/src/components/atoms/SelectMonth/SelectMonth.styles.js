import styled from 'styled-components';
import { Wrapper as WrapperYear } from 'components/atoms/SelectYear/SelectYear.styles';

// export const Wrapper = styled.select`
//   height: 30px;
//   width: 25%;
//   background-color: white;
//   color: #222;
// `;

export const Wrapper = styled(WrapperYear)`
  width: 25%;
  border: none;

  select {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
  }

  &::before {
    background-color: ${({ theme }) => theme.colors.black};
  }
`;
