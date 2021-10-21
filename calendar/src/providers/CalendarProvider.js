import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputModal from 'components/organisms/Modal/InputModal';
import RemoveModal from 'components/organisms/Modal/RemoveModal';
import EditModal from 'components/organisms/Modal/EditModal';
import { useEvent } from 'hooks/useEvent';
import { useModal } from 'hooks/useModal';
import { date } from 'data/date';
import { initialCalendarContext, initialDate, initialEvent } from 'data/initialStates';
import { DateProviderShape } from 'types';
import { BASE_API_URL } from 'data/baseUrl';
import axios from 'axios';

export const CalendarContext = React.createContext(initialCalendarContext);

const CalendarProvider = ({ children }) => {
  const [newDate, setNewDate] = useState(initialDate);
  const [isOpenRightbar, setOpenRightbarState] = useState(false);
  const [day, setDay] = useState('');
  const { event, clickedEvent, showEventDetails, showEventWithTheSameDay, addEvent, saveNewEventValues, loadInitialEventValues, arrayIndex } =
    useEvent(initialEvent);
  const [isShowingInputModal, toggleInputModal] = useModal();
  const [isShowingRemoveModal, toggleRemoveModal] = useModal();
  const [isShowingEditInputModal, toggleEditInputModal] = useModal();
  const [isShowingEditAcceptModal, toggleEditAcceptModal] = useModal();

  const addNewEvent = (twoDigitDate) => {
    toggleInputModal();
    setDay(twoDigitDate);
  };

  const update = (image) => {
    const eventIndex = event.findIndex((el) => el.formattedDateToSort === clickedEvent.formattedDateToSort);
    event[eventIndex].image = image;
    clickedEvent.image = image;
    localStorage.setItem('events', JSON.stringify(event));
  };

  const selectDate = () => {
    setNewDate({
      year: date.year,
      month: date.monthName[date.month],
      monthIndex: date.month + 1,
      remoldedMonthName: date.remoldedMonthName[date.month],
    });
  };

  const changeEditedEvent = (inputState) => {
    loadInitialEventValues(inputState);
    toggleEditAcceptModal();
  };

  const removeEventAccept = async () => {
    const filteredEvents = event.filter((event) => event.formattedDateToSort !== clickedEvent.formattedDateToSort);
    try {
      await axios.delete(`${BASE_API_URL}/event/${clickedEvent.formattedDateToSort}`).then((response) => {
        addEvent(filteredEvents);
      });
    } catch (error) {
      if (error.response) {
        console.log(error.response);
      }
    }
    setOpenRightbarState(false);
  };

  const showClickedEvent = (filterrIndex, filterr, twoDigitDate) => {
    if (filterrIndex === 1) {
      showEventDetails(twoDigitDate, newDate);
    } else {
      showEventWithTheSameDay(filterr, filterrIndex);
    }
    setOpenRightbarState(true);
  };

  const editEvent = () => {
    toggleEditInputModal();
    toggleInputModal();
    saveNewEventValues();
    setDay(clickedEvent.day);
  };

  return (
    <CalendarContext.Provider
      value={{
        openState: [isOpenRightbar, setOpenRightbarState],
        newDate,
        selectDate,
        event,
        clickedEvent,
        arrayIndex,
        editEvent,
        addNewEvent,
        showClickedEvent,
        update,
        addEvent,
        changeEditedEvent,
        toggleRemoveModal,
        isShowingRemoveModal,
        toggleEditAcceptModal,
        isShowingEditAcceptModal,
      }}
    >
      {children}
      <InputModal
        isShowingInputModal={isShowingInputModal}
        day={day}
        isShowingEditInputModal={isShowingEditInputModal}
        toggleEditInputModal={toggleEditInputModal}
        toggleInputModal={toggleInputModal}
      />
      <RemoveModal removeEventAccept={removeEventAccept} isShowingRemoveModal={isShowingRemoveModal} toggleRemoveModal={toggleRemoveModal} />
      <EditModal />
    </CalendarContext.Provider>
  );
};

CalendarContext.propTypes = {
  value: PropTypes.shape(DateProviderShape),
};

export default CalendarProvider;
