import styled from 'styled-components';
import backgroundImage from 'assets/images/dark_street1.jpg';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  margin: auto;
  background-image: url(${backgroundImage});
  background-size: cover;
`;
