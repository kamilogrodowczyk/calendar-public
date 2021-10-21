import styled from 'styled-components';

export const Paragraph = styled.p`
  font-size: ${({ theme, isSmaller }) => (isSmaller ? theme.fontSizes.small : theme.fontSizes.primary)};
  font-weight: ${({ isBold }) => (isBold ? 800 : 400)};
  color: ${({ isWhite, theme }) => (isWhite ? theme.colors.white : theme.colors.black)};
  margin-bottom: ${({ isMargin }) => (isMargin ? '20px' : '0px')};
  letter-spacing: 0.5px;
  line-height: 1.5;
  word-break: break-all;
`;

export const ErrorParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.error};
  background-color: ${({ theme, isWhite }) => (isWhite ? theme.colors.white : 'transparent')};
  margin-bottom: 5px;
  padding: 5px;
  font-weight: 700;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
`;
