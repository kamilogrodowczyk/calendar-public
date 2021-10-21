import React, { useContext, useEffect } from 'react';
import { Wrapper, StyledCalendarItem, StyledNameDay, StyledCalendar } from './Calendar.styles';
import CalendarItem from 'components/molecules/CalendarItem/CalendarItem';
import { date } from 'data/date';
import CalendarHeading from 'components/molecules/CalendarHeading/CalendarHeading';
import { CompanyContext } from 'providers/CompanyProvider';
import { CalendarContext } from 'providers/CalendarProvider';
import { useAxios } from 'hooks/useAxios';

const Calendar = () => {
  const { selectedCompany } = useContext(CompanyContext);
  const { addEvent } = useContext(CalendarContext);
  const { getEvent } = useAxios();

  useEffect(() => {
    let isSubscribed = true;
    (async () => {
      const allEvents = await getEvent();
      const companyEvent = await allEvents.filter((company) => company.company === selectedCompany);
      if (isSubscribed) {
        addEvent(companyEvent);
      }
    })();
    return () => (isSubscribed = false);
  }, [getEvent, selectedCompany]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Wrapper>
      <CalendarHeading selectedCompany={selectedCompany} />
      <StyledCalendar>
        <StyledNameDay>
          {date.days.map((day) => (
            <p key={day}>{day}</p>
          ))}
        </StyledNameDay>
        <StyledCalendarItem>
          <CalendarItem />
        </StyledCalendarItem>
      </StyledCalendar>
    </Wrapper>
  );
};

export default Calendar;
