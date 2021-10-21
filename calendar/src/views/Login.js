import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Input, Button, DisabledInput } from 'components/organisms/Modal/InputModal.styles';
import axios from 'axios';
import { BASE_API_URL } from 'data/baseUrl';
import MainWrapper from 'components/templates/MainTemplate';
import { InputErrorWrapper, FormWrapper } from 'components/templates/MainTemplate.styles';
import { CompanyContext } from 'providers/CompanyProvider';
import { Title } from 'components/atoms/Heading.styles';
import { ErrorParagraph } from 'components/atoms/Paragraph.styles';

const LoginInput = styled(Input)`
  width: 80%;
  border: solid 1px rgba(255, 255, 255, 1);
`;

const LinkedElement = styled(Link)`
  color: black;
`;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState('');
  const { client } = useParams();
  const { setUserData } = useContext(CompanyContext);

  const onSubmit = async (data) => {
    try {
      const loginResponse = await axios.post(`${BASE_API_URL}/login`, data);
      setUserData({
        token: loginResponse.data.token,
        user: loginResponse.data.rest,
      });
      localStorage.setItem('auth-token', loginResponse.data.token);
      localStorage.setItem('client', client);
      setErrorMessage('');
      history.push(`/${client}/dashboard`);
    } catch (error) {
      console.log(error);
      if (error.response) {
        console.log('error', error.response.data);
        setErrorMessage(error.response.data);
      }
    }
  };

  return (
    <MainWrapper>
      <FormWrapper as="form" onSubmit={handleSubmit(onSubmit)}>
        <Title>socialnet</Title>
        {errorMessage ? <p>{errorMessage}</p> : null}
        <DisabledInput type="text" {...register('company')} value={client} readonly />
        <InputErrorWrapper>
          <LoginInput
            {...register('email', {
              required: 'Email jest wymagany',
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Email nie jest prawidłowy',
              },
            })}
            placeholder="Email"
          />
          {errors.email && <ErrorParagraph isVisible>{errors.email.message}</ErrorParagraph>}
        </InputErrorWrapper>
        <InputErrorWrapper>
          <LoginInput
            type="password"
            {...register('password', {
              required: 'Hasło jest wymagane',
              minLength: {
                value: 6,
                message: 'Hasło musi zawierać minimum 6 znaków',
              },
            })}
            placeholder="Hasło"
          />
          {errors.password && <ErrorParagraph isVisible>{errors.password.message}</ErrorParagraph>}
        </InputErrorWrapper>
        <Button isBlack>Zaloguj się</Button>
        {client === 'admin' ? <LinkedElement to={`/admin/register`}>Zarejestruj się</LinkedElement> : null}
      </FormWrapper>
    </MainWrapper>
  );
};

export default Login;
