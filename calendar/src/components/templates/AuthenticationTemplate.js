import { CompanyContext } from 'providers/CompanyProvider';
import React, { useContext } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import ErrorPage from 'views/ErrorPage';
import MainWrapper from './MainTemplate';

const AuthenticationWrapper = ({ children }) => {
  const { client } = useParams();
  const { company } = useContext(CompanyContext);
  const correctEndpoint = company ? company.find((el) => el.company.toLowerCase().replace(/\s/g, '') === client) : '';
  const localStorageToken = localStorage.getItem('auth-token');
  let activeClient = localStorage.getItem('client');

  return correctEndpoint || client === 'admin' ? (
    <>
      {localStorageToken ? (
        <>
          <Redirect to={`/${activeClient}/dashboard`} />
          {children}
        </>
      ) : (
        <>
          <Redirect to={`/${client}/login`} />
          {children}
        </>
      )}
    </>
  ) : (
    <MainWrapper>
      <ErrorPage />
    </MainWrapper>
  );
};

export default AuthenticationWrapper;
