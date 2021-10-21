import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const InputErrorWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormWrapper = styled.div`
  display: grid;
  gap: 2vh;
  justify-items: center;
  align-items: center;
  align-content: center;
  width: 350px;
  height: 50%;
  background-color: ${({ theme }) => theme.colors.yellow};
  border-radius: 10px;
`;
