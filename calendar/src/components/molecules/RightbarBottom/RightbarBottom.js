import { Paragraph } from 'components/atoms/Paragraph.styles';
import React, { useContext } from 'react';
import { CalendarContext } from 'providers/CalendarProvider';
import { StyledButton, StyledBottom } from './RightbarBottom.styles';

const RightbarBottom = () => {
  const { toggleRemoveModal, clickedEvent, editEvent } = useContext(CalendarContext);

  const removeEventQuestion = () => {
    toggleRemoveModal();
  };
  return (
    <StyledBottom>
      <div>
        <StyledButton onClick={editEvent}>edytuj</StyledButton>
        <StyledButton onClick={removeEventQuestion}>usuń</StyledButton>
      </div>
      <Paragraph isSmaller>utworzono {clickedEvent.creationDate}</Paragraph>
    </StyledBottom>
  );
};

export default RightbarBottom;
