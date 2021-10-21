import React from 'react';
import styled from 'styled-components';
import { StyledCalendarNow } from 'components/molecules/CalendarItem/CalendarItem.styles';
import { date } from 'data/date';
import { addPastDays } from 'helpers/addDays';

const StyledCalendarPast = styled(StyledCalendarNow)`
  &:hover {
    background-color: unset;
    cursor: unset;
  }

  & > p {
    opacity: 0.2;
  }
`;

const PastDays = () => (
  <>
    {addPastDays(date, date.year, date.month).map((el) => (
      <StyledCalendarPast data-testid="days" key={el} index={el}>
        <p>{el}</p>
      </StyledCalendarPast>
    ))}
  </>
);

export default PastDays;
