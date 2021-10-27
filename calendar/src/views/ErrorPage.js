import { Title } from 'components/atoms/Heading.styles';
import { Paragraph } from 'components/atoms/Paragraph.styles';
import React from 'react';
import { Redirect, useParams } from 'react-router';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const ErrorTitle = styled(Title)`
  font-size: 150px;
  letter-spacing: 5px;
  position: relative;
  display: flex;
  justify-content: center;
  kerning: normal;
`;

const ErrorParagraph = styled(Paragraph)`
  position: absolute;
  top: 95%;
  text-transform: lowercase;
`;

const ErrorPage = () => {
  const { client } = useParams();
  return (
    <Wrapper>
      <ErrorTitle isWhite>
        OOPS!
        <ErrorParagraph isWhite>Niestety nie udało się znaleźć tej strony</ErrorParagraph>
      </ErrorTitle>
      {client === ':client' ? <Redirect to="/admin/login" /> : <Redirect to={`/${client}/login`} />}
    </Wrapper>
  );
};

export default ErrorPage;
