import styled from 'styled-components';
import { date } from 'data/date';

export const StyledCalendarNow = styled.div`
  border-bottom: solid 1px white;
  border-left: solid 1px white;
  height: 100px;
  width: 100%;
  /* padding: 7px; */
  position: relative;
  cursor: pointer;
  background-color: ${({ isDay, theme }) => (isDay ? theme.colors.yellow : 'transparent')};
  color: ${({ isDay, theme }) => (isDay ? theme.colors.black : theme.colors.white)};
  &:nth-child(7n - 1),
  &:nth-child(7n) {
    color: ${({ isDay, theme }) => (isDay ? theme.colors.black : theme.colors.yellow)};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightenBlack};
  }

  &:hover > span {
    opacity: 1;
  }

  &:hover > svg {
    opacity: 1;
  }

  & > p {
    color: ${({ isToday }) => (isToday === date.date && new Date().getMonth() === date.month && new Date().getFullYear() === date.year ? 'red' : '')};
    opacity: 1;
    font-weight: 800;
    position: absolute;
    padding: 7px 0 0 7px;
    left: 0;
    top: 0;
    height: 20%;
    width: 100%;
  }
`;
