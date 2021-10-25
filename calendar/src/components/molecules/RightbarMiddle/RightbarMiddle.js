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
import Base64Downloader from 'react-base64-downloader';

const style = {
  width: '0',
  height: '0',
  cursor: 'pointer',
  marginBottom: '30px',
};

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
        {clickedEvent.image ? (
          <Base64Downloader base64={clickedEvent.image} downloadName={`${clickedEvent.title}`} style={style}>
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 384.97 384.97">
              <title>Pobierz zdjęcie</title>
              <path d="M192.485 0C86.185 0 0 86.173 0 192.485c0 106.3 86.185 192.485 192.485 192.485 106.312 0 192.485-86.185 192.485-192.485C384.97 86.173 298.797 0 192.485 0zm0 360.909c-93.018 0-168.424-75.406-168.424-168.424S99.467 24.061 192.485 24.061s168.424 75.406 168.424 168.424-75.406 168.424-168.424 168.424z" />
              <path d="m268.095 209.243-63.46 62.558V84.212c0-6.641-5.438-12.03-12.151-12.03s-12.151 5.39-12.151 12.03v187.589l-63.46-62.558c-4.74-4.692-12.439-4.692-17.179 0-4.74 4.704-4.74 12.319 0 17.011l84.2 82.997c2.25 2.25 5.414 3.537 8.59 3.537 3.164 0 6.328-1.299 8.59-3.525l84.2-82.997a11.942 11.942 0 0 0 0-17.011c-4.739-4.704-12.439-4.704-17.179-.012z" />
            </svg>
          </Base64Downloader>
        ) : null}
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
