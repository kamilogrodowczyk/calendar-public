import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'components/atoms/Button.styles';
import { ErrorParagraph } from 'components/atoms/Paragraph.styles';
import { Wrapper, Paragraph, AdminWrapper, CompanyWrapper, LeftbarButton } from './Leftbar.styles';
import { Title } from 'components/atoms/Heading.styles';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Input } from './Leftbar.styles';
import { useForm } from 'react-hook-form';
import { CompanyContext } from 'providers/CompanyProvider';
import axios from 'axios';
import { BASE_API_URL } from 'data/baseUrl';
import { InputErrorWrapper } from 'components/templates/MainTemplate.styles';

const Leftbar = () => {
  const { removeCompany, addCompany, company, setSelectedCompany, resetUserData } = useContext(CompanyContext);
  const { client } = useParams();
  const [error, setError] = useState('');
  const [isVisible, setVisibleState] = useState(false);
  const [isOpacity, setIsOpacity] = useState(true);
  const { register, handleSubmit, reset } = useForm();

  const history = useHistory();

  useEffect(() => {
    const clientsIndex = company ? company.findIndex((el) => el.company.toLowerCase().replace(/\s/g, '') === client) : '';
    if (clientsIndex >= 0) {
      setSelectedCompany(company[clientsIndex].company);
    }
  }, [client, company]); // eslint-disable-line react-hooks/exhaustive-deps

  const filteredClients = company ? company.find((el) => el.company.toLowerCase().replace(/\s/g, '') === client) : '';

  const changeClient = (e) => {
    setSelectedCompany(e.target.textContent);
  };

  const removeClient = (name) => {
    removeCompany(name);
  };

  const logOut = () => {
    localStorage.setItem('auth-token', '');
    localStorage.removeItem('client');
    history.push(`/${client}/login`);
    resetUserData();
  };

  const onSubmit = async (data) => {
    if (!data.company) return;
    try {
      await axios.post(`${BASE_API_URL}/create-company`, {
        ...data,
      });
      addCompany({
        company: data.company,
      });
      setError('');
    } catch (e) {
      setError(e.response.data);
      setVisibleState(true);
      setTimeout(() => {
        setError('');
        setVisibleState(false);
      }, 4000);
    }
    reset();
  };

  return (
    <>
      <Wrapper isOpacity={isOpacity}>
        <AdminWrapper>
          <Title style={{ cursor: 'pointer' }} onClick={() => (client === 'admin' ? setSelectedCompany('') : null)} as="h2" isCenter>
            socialnet
          </Title>
          {company && !filteredClients ? (
            <>
              <div>
                {company.map((client, index) => (
                  <CompanyWrapper key={`${client._id}_${index}`} client={client}>
                    <Paragraph onClick={changeClient}>
                      {client.company}
                      <svg
                        data-testid="remove-company"
                        onClick={() => removeClient(client.company)}
                        height="20"
                        viewBox="1 1 512 512"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M256 0C114.613 0 0 114.613 0 256s114.613 256 256 256 256-114.613 256-256C511.832 114.684 397.316.168 256 0zm0 480C132.29 480 32 379.71 32 256S132.29 32 256 32s224 100.29 224 224c-.133 123.656-100.344 223.867-224 224zm0 0" />
                        <path d="M380.45 131.55c-6.25-6.245-16.38-6.245-22.626 0L256 233.376 154.176 131.551c-6.14-6.356-16.27-6.531-22.625-.39-6.356 6.136-6.531 16.265-.39 22.62.128.133.257.266.39.395L233.375 256 131.551 357.824c-6.356 6.137-6.531 16.266-.39 22.625 6.136 6.356 16.265 6.531 22.62.39.133-.128.266-.257.395-.39L256 278.625l101.824 101.824c6.356 6.137 16.485 5.961 22.621-.394 5.989-6.2 5.989-16.032 0-22.23L278.625 256l101.824-101.824c6.246-6.246 6.246-16.375 0-22.625zm0 0" />
                      </svg>
                    </Paragraph>
                  </CompanyWrapper>
                ))}
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                {error && <ErrorParagraph isVisible={isVisible}>{error}</ErrorParagraph>}
                <Input type="text" {...register('company')} placeholder="Dodaj nową firmę" />
              </form>
              <Link to={`/admin/register`} style={{ textAlign: 'center' }}>
                <Button isBlack isHorizontalPadding>
                  przejdź do rejestracji
                </Button>
              </Link>
            </>
          ) : null}
        </AdminWrapper>
        <InputErrorWrapper>
          <Button isBlack isMarginTop isHorizontalPadding onClick={logOut}>
            wyloguj się
          </Button>
        </InputErrorWrapper>
      </Wrapper>
      <LeftbarButton onClick={() => setIsOpacity(!isOpacity)} isWhite>
        {isOpacity ? 'Rozwiń' : 'Zwiń'}
      </LeftbarButton>
    </>
  );
};

export default Leftbar;
