import { useState } from 'react';
import { editedInput } from 'data/initialStates';

export const useEvent = (initialEvent) => {
  const [event, setEvent] = useState([]);
  const [clickedEvent, setClickedEvent] = useState(initialEvent);
  const [arrayIndex, setArrayIndex] = useState(null);

  const addEvent = (oldEvents = event, newEvent = {}) => {
    // if (!newEvent.creationDate) return;
    setEvent([...oldEvents, newEvent]);
  };

  const saveNewEventValues = () => {
    const eventToEdited = event.findIndex((el) => el.formattedDateToSort === clickedEvent.formattedDateToSort);
    setArrayIndex(eventToEdited);
  };

  const loadInitialEventValues = (inputState) => {
    for (const property in editedInput) {
      clickedEvent[property] = inputState[property];
      event[arrayIndex][property] = inputState[property];
      localStorage.setItem('events', JSON.stringify(event));
      event[arrayIndex].eventDate = clickedEvent.eventDate;
    }
  };

  const showEventDetails = (twoDigitDate, newDate) => {
    event.filter((element) => {
      if (element.eventDate === `${twoDigitDate} ${newDate.remoldedMonthName} ${newDate.year}`) {
        setClickedEvent({
          activeUser: element.activeUser,
          company: element.company,
          eventDate: element.eventDate,
          formattedDateToSort: element.formattedDateToSort,
          title: element.title,
          time: element.time,
          description: element.description,
          comments: element.comments,
          image: element.image,
          creationDate: element.creationDate,
          creationHour: element.creationHour,
          day: element.day,
        });
      }
      return element;
    });
  };

  const showEventWithTheSameDay = (element, index) => {
    if (!element || index <= 1) return;
    setClickedEvent(element[element.length - index]);
  };

  return {
    event,
    clickedEvent,
    showEventDetails,
    showEventWithTheSameDay,
    addEvent,
    saveNewEventValues,
    loadInitialEventValues,
    arrayIndex,
  };
};
