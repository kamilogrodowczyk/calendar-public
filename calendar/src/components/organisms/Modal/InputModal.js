import React, { useCallback, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Textarea, Input, Button, Form, InputWrapper, ErrorParagraph } from './InputModal.styles';
import { Title } from 'components/atoms/Heading.styles';
import { useConstantInfo } from 'hooks/useConstantInfo';
import { initialConstant, editedInput } from 'data/initialStates';
import { CalendarContext } from 'providers/CalendarProvider';
import { useForm } from 'react-hook-form';
import { useImage } from 'hooks/useImage';
import { CompanyContext } from 'providers/CompanyProvider';
import axios from 'axios';
import { BASE_API_URL } from 'data/baseUrl';
import { useAxios } from 'hooks/useAxios';

const InputModal = ({ day, isShowingInputModal, isShowingEditInputModal, toggleEditInputModal, toggleInputModal }) => {
  const {
    addEvent,
    arrayIndex,
    changeEditedEvent,
    event,
    clickedEvent,
    newDate: { remoldedMonthName, year },
  } = useContext(CalendarContext);
  const { createEvent } = useAxios();
  const { selectedCompany, activeUser } = useContext(CompanyContext);
  const { constantInfo, handleShowConstantInfo, clearConstant } = useConstantInfo(initialConstant);
  const { image, handleSetImage } = useImage();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const loadValuesToEdited = useCallback(() => {
    if (isShowingEditInputModal) {
      for (const property in editedInput) {
        setValue(`${property}`, `${event[arrayIndex][property]}`);
      }
    }
  }, [isShowingEditInputModal]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    loadValuesToEdited();
  }, [loadValuesToEdited]);

  useEffect(() => {
    if (isShowingInputModal || isShowingEditInputModal) {
      handleShowConstantInfo(day, selectedCompany, activeUser);
    }
  }, [isShowingInputModal || isShowingEditInputModal]); // eslint-disable-line react-hooks/exhaustive-deps

  const onSubmit = async (data) => {
    data.image = image;
    if (!data.title) return;
    if (!isShowingEditInputModal) {
      let merged = { ...data, ...constantInfo };
      await createEvent(merged);
      addEvent(event, merged);
    } else {
      try {
        await axios.put(`${BASE_API_URL}/event/${clickedEvent.formattedDateToSort}`, data).then((response) => {
          changeEditedEvent(data);
          toggleEditInputModal();
        });
      } catch (error) {
        if (error.response) {
          console.log(error.response);
        }
      }
    }
    reset();
    clearConstant();
    toggleInputModal();
  };

  const dropImage = (e) => {
    handleSetImage(e.target.files[0]);
  };

  const toogleInputModals = () => {
    if (isShowingEditInputModal) {
      toggleEditInputModal();
    }
    toggleInputModal();
    reset();
  };

  return (
    <Wrapper
      isOpen={isShowingInputModal}
      onRequestClose={toogleInputModals}
      ariaHideApp={!isShowingInputModal}
      appElement={document.getElementById('root')}
    >
      <Form onSubmit={handleSubmit(onSubmit)} data-testid="form">
        <Title as="h2" isWhite>
          Notatka
        </Title>
        <Title as="p" isWhite>
          {day} {remoldedMonthName} {year}
        </Title>
        <InputWrapper>
          <Input {...register('title', { required: 'Tytuł jest wymagany' })} placeholder="Tytuł" />
          {errors.title && (
            <ErrorParagraph isWhite isVisible>
              {errors.title.message}
            </ErrorParagraph>
          )}
        </InputWrapper>
        <Input type="time" placeholder="Czas" {...register('time')} />
        {!isShowingEditInputModal ? <Input {...register('image')} type="file" accept="image/png, image/jpeg" onChange={dropImage} isWhite /> : null}
        <Textarea as="textarea" {...register('description')} placeholder="Opis" />
        <Textarea as="textarea" {...register('comment')} placeholder="Uwagi" />
        <Button data-testid="submit-button" type="submit">
          {isShowingEditInputModal ? 'Zmień' : 'Dodaj'}
        </Button>
      </Form>
    </Wrapper>
  );
};

InputModal.propTypes = {
  isShowingInputModal: PropTypes.bool,
  isShowingEditInputModal: PropTypes.bool,
  day: PropTypes.string,
  newDate: PropTypes.shape({
    remoldedMonthName: PropTypes.string,
    year: PropTypes.number,
  }),
};

export default InputModal;
