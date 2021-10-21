import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Button } from './RemoveModal.styles';
import { Paragraph } from 'components/atoms/Paragraph.styles';

const overlayStyles = {
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
};

const RemoveModal = ({ removeEventAccept, isShowingRemoveModal, toggleRemoveModal }) => {
  const acceptRemovedEvent = () => {
    toggleRemoveModal();
  };

  const handleRemoveEvent = () => {
    removeEventAccept();
    toggleRemoveModal();
  };
  return (
    <Wrapper isOpen={isShowingRemoveModal} style={overlayStyles} ariaHideApp={!isShowingRemoveModal} appElement={document.getElementById('root')}>
      <Paragraph>Czy na pewno chcesz usunąć wydarzenie?</Paragraph>
      <span>
        <Button data-testid="button-to-remove" isMarginRight onClick={handleRemoveEvent}>
          Tak
        </Button>
        <Button onClick={acceptRemovedEvent}>Nie</Button>
      </span>
    </Wrapper>
  );
};

RemoveModal.propTypes = {
  isShowingRemoveModal: PropTypes.bool,
  removeEventAccept: PropTypes.func,
  toggleRemoveModal: PropTypes.func,
};

export default RemoveModal;
