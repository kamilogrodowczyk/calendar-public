import styled from 'styled-components';

export const Heading1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.large};
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  line-height: 1.1;
`;

export const Heading2 = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 700;
  margin-bottom: 1.2rem;
  line-height: 1.2;
`;

export const Heading3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.primary};
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.3;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme, isWhite }) => (isWhite ? theme.colors.white : theme.colors.black)};
  text-align: ${({ isCenter }) => (isCenter ? 'center' : 'left')};
`;
