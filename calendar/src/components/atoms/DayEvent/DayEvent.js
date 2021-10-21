import React, { useContext, useEffect, useState } from 'react';
import { StyledDayEvent, Span, Button, ButtonsContainer } from 'components/organisms/Calendar/Calendar.styles';
import { CalendarContext } from 'providers/CalendarProvider';
import { CompanyContext } from 'providers/CompanyProvider';
import SvgAddElement from 'components/atoms/SVG/SvgAddElement';
import { sortArray } from 'helpers/sortArray';
import { findDuplicates } from 'helpers/findDuplicates';

const DayEvent = ({ el }) => {
  const { newDate, event, showClickedEvent, isShowingRemoveModal } = useContext(CalendarContext);
  const { selectedCompany } = useContext(CompanyContext);
  const [oneDayWithSeveralEvents, setOneDayWithSeveralEvents] = useState([]);
  const [oneEventIndex, setOneEventIndex] = useState(1);
  const [dateAttribute, setDateAttribute] = useState('');

  useEffect(() => {
    if (isShowingRemoveModal) {
      setOneEventIndex(1);
    }
  }, [isShowingRemoveModal]);

  const handleShowEvent = (e) => {
    e.stopPropagation();
    const dayAttribute = e.currentTarget.getAttribute('data-day');
    const twoDigitDate = parseInt(dayAttribute) < 10 ? `0${dayAttribute}` : `${dayAttribute}`;
    showClickedEvent(oneEventIndex, oneDayWithSeveralEvents, twoDigitDate);
  };

  const nextEvent = (e) => {
    e.stopPropagation();
    const targetAttribute = e.target.getAttribute('data-date');
    const sortedArray = sortArray(event);
    setOneDayWithSeveralEvents(sortedArray.filter((el) => el.eventDate === targetAttribute));
    setOneEventIndex(oneEventIndex - 1);
  };

  const previousEvent = (e) => {
    e.stopPropagation();
    const targetAttribute = e.target.getAttribute('data-date');
    setDateAttribute(targetAttribute);
    const sortedArray = sortArray(event);
    const arrayWithTheSameDay = sortedArray.filter((el) => el.eventDate === targetAttribute);
    setOneDayWithSeveralEvents(arrayWithTheSameDay);
    setOneEventIndex(oneEventIndex + 1);
  };
  const eventDay = el < 10 ? '0' + el : el;
  const eventDate = `${eventDay} ${newDate.remoldedMonthName} ${newDate.year}`;
  const arrayOfDaysWithSeveralEvents = findDuplicates(event);
  const daysWithSeveralEvents = arrayOfDaysWithSeveralEvents.find((el) => el === eventDate);
  return (
    <>
      {event.map((element, eventIndex) =>
        element.eventDate === eventDate && element.company === selectedCompany ? (
          <React.Fragment key={eventIndex}>
            {oneDayWithSeveralEvents.length && daysWithSeveralEvents ? (
              <>
                {dateAttribute === eventDate ? (
                  <StyledDayEvent className="overlay">
                    <p className="paragraph">{el}</p>
                    <p>{oneDayWithSeveralEvents[oneDayWithSeveralEvents.length - oneEventIndex].title}</p>
                    <p>{oneDayWithSeveralEvents[oneDayWithSeveralEvents.length - oneEventIndex].time}</p>
                  </StyledDayEvent>
                ) : (
                  <StyledDayEvent className="overlay">
                    <p>{element.title}</p>
                    <p>{element.time}</p>
                  </StyledDayEvent>
                )}
              </>
            ) : (
              <StyledDayEvent className="overlay">
                <p className="paragraph">{el}</p>
                <p>{element.title}</p>
                <p>{element.time}</p>
              </StyledDayEvent>
            )}
            <Span>
              <Button isBlack>Dodaj</Button>
              <Button isBlack data-day={el} onClick={handleShowEvent}>
                Pokaż
              </Button>
              <ButtonsContainer isDisplay={daysWithSeveralEvents?.length} key={eventIndex}>
                {oneDayWithSeveralEvents.length !== oneEventIndex || dateAttribute !== eventDate ? (
                  <Button onClick={previousEvent} data-date={eventDate} disabled={!(oneEventIndex === 1 || dateAttribute === eventDate)}>
                    &lt;
                  </Button>
                ) : null}
                {oneEventIndex !== 1 && dateAttribute === eventDate ? (
                  <Button onClick={nextEvent} data-date={eventDate}>
                    &gt;
                  </Button>
                ) : null}
              </ButtonsContainer>
            </Span>
          </React.Fragment>
        ) : null
      )}
      <SvgAddElement />
    </>
  );
};

export default DayEvent;
