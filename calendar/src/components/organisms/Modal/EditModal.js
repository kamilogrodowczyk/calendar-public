import React, { useContext } from 'react';
import { Wrapper, Button } from './EditModal.styles';
import { Paragraph } from 'components/atoms/Paragraph.styles';
import { CalendarContext } from 'providers/CalendarProvider';

const overlayStyles = {
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
};

const EditModal = () => {
  const { toggleEditAcceptModal, isShowingEditAcceptModal } = useContext(CalendarContext);

  return (
    <Wrapper
      isOpen={isShowingEditAcceptModal}
      style={overlayStyles}
      ariaHideApp={!isShowingEditAcceptModal}
      appElement={document.getElementById('root')}
    >
      <Paragraph>Wydarzenie zostało zmienione</Paragraph>
      <Button onClick={() => toggleEditAcceptModal()}>Ok</Button>
    </Wrapper>
  );
};

export default EditModal;
