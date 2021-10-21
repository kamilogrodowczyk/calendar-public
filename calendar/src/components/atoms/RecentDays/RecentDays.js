import React, { useContext } from 'react';
import { StyledCalendarNow } from 'components/molecules/CalendarItem/CalendarItem.styles';
import { date } from 'data/date';
import DayEvent from '../DayEvent/DayEvent';
import { CalendarContext } from 'providers/CalendarProvider';

const RecentDays = () => {
  const { addNewEvent } = useContext(CalendarContext);

  const handleAddEvent = (e) => {
    const targetDay = e.currentTarget.firstChild.textContent;
    const twoDigitDate = parseInt(targetDay) < 10 ? `0${targetDay}` : `${targetDay}`;
    addNewEvent(twoDigitDate);
  };
  return (
    <>
      {date.displayNumberOfDays(date.month).map((el, index) => (
        <StyledCalendarNow role="button" data-testid="thismonth-days" key={index} isToday={el} onClick={handleAddEvent}>
          <p>{el}</p>
          <DayEvent el={el} />
        </StyledCalendarNow>
      ))}
    </>
  );
};

export default RecentDays;
