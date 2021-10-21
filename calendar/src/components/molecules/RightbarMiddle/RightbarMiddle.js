import React, { useContext, useState } from 'react';
import { CalendarContext } from 'providers/CalendarProvider';
import { StyledText, StyledImage, Button, QuestionElement, FileInput, AcceptElement } from './RightbarMiddle.styles';
import { Button as DefaultButton } from 'components/atoms/Button.styles';
import { Title } from 'components/atoms/Heading.styles';
import { Paragraph } from 'components/atoms/Paragraph.styles';
import emptyImage from 'assets/images/empty-image.png';
import { useImage } from 'hooks/useImage';
import axios from 'axios';
import { BASE_API_URL } from 'data/baseUrl';

const RightbarMiddle = () => {
  const { clickedEvent, update } = useContext(CalendarContext);
  const [isDisplayQuestion, setDisplayQuestionState] = useState(false);
  const { image, handleSetImage } = useImage('');
  const [isDisplayAnswer, setDisplayAnswerState] = useState(false);

  const changeImage = (e) => {
    handleSetImage(e.target.files[0]);
    setDisplayAnswerState(true);
  };

  const updateImage = async () => {
    try {
      await axios.put(`${BASE_API_URL}/event/image/${clickedEvent.formattedDateToSort}`, { image: image }).then((response) => {
        update(image);
        setDisplayAnswerState(false);
      });
    } catch (error) {
      if (error.response) {
        console.log(error.response);
      }
    }
  };

  return (
    <StyledText>
      <div style={{ position: 'relative' }}>
        <Title as="h3">{clickedEvent.title}</Title>
        <div>
          <StyledImage src={clickedEvent.image ? clickedEvent.image : emptyImage} alt="good-element" />
          <Button onClick={() => setDisplayQuestionState(true)}>Zmień</Button>
          <QuestionElement isDisplay={isDisplayQuestion}>
            <p>Czy na pewno chcesz zmienić zdjęcie?</p>
            <div>
              <FileInput
                onChange={changeImage}
                onClick={() => setDisplayQuestionState(false)}
                name="image"
                accept="image/png, image/jpeg"
                type="file"
              ></FileInput>
              <DefaultButton onClick={() => setDisplayQuestionState(false)}>Nie</DefaultButton>
            </div>
          </QuestionElement>
          <AcceptElement isDisplayAnswer={isDisplayAnswer}>
            <p>Zdjęcie zostało zapisane</p>
            <DefaultButton onClick={updateImage}>Ok</DefaultButton>
          </AcceptElement>
        </div>
        <Paragraph isSmaller isMargin>
          {clickedEvent.description}
        </Paragraph>
      </div>
      <div>
        <Paragraph isSmaller isBold>
          Uwagi
        </Paragraph>
        <Paragraph isSmaller isMargin>
          {clickedEvent.comments}
        </Paragraph>
        <Paragraph isSmaller>
          Publikuje {clickedEvent.activeUser} godzina {clickedEvent.creationHour}
        </Paragraph>
      </div>
    </StyledText>
  );
};

export default RightbarMiddle;
