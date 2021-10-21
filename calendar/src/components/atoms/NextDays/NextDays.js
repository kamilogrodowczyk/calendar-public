import React from 'react';
import styled from 'styled-components';
import { StyledCalendarNow } from 'components/molecules/CalendarItem/CalendarItem.styles';
import { date } from 'data/date';
import { addNextDays } from 'helpers/addDays';

const StyledCalendarNext = styled(StyledCalendarNow)`
  &:hover {
    background-color: unset;
    cursor: unset;
  }

  & > p {
    opacity: 0.2;
  }
`;

const NextDays = () => (
  <>
    {addNextDays(date, date.year, date.month).map((el) => (
      <StyledCalendarNext data-testid="days" key={el} index={el}>
        <p>{el}</p>
      </StyledCalendarNext>
    ))}
  </>
);

export default NextDays;
