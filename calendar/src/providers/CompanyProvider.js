import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useCompany } from 'hooks/useCompany';
import axios from 'axios';
import { BASE_API_URL } from 'data/baseUrl';
import { CompanyProviderShape } from 'types';
import { initialCompanyContext } from 'data/initialStates';
import { useAxios } from 'hooks/useAxios';

export const CompanyContext = React.createContext(initialCompanyContext);

const CompanyProvider = (props) => {
  const { selectedCompany, setSelectedCompany } = useCompany('');
  const [company, setCompany] = useState([]);
  const { getCompanies } = useAxios();
  const [activeUser, setActiveUser] = useState('-');
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  const resetUserData = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
  };

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem('auth-token');
      if (token === null) {
        localStorage.setItem('auth-token', '');
        token = '';
      }
      const tokenResponse = await axios.post(`${BASE_API_URL}/tokenIsValid`, null, { headers: { 'x-auth-token': token } });
      if (tokenResponse.data) {
        const userRes = await axios.get(`${BASE_API_URL}/user`, {
          headers: { 'x-auth-token': token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };
    checkLoggedIn();
  }, []);

  useEffect(() => {
    if (userData.user) {
      setActiveUser(userData.user.firstName);
    }
  }, [userData]);

  useEffect(() => {
    let isSubscribed = true;
    (async () => {
      const allCompanies = await getCompanies();
      if (isSubscribed) {
        setCompany(allCompanies);
      }
    })();
    return () => (isSubscribed = false);
  }, [getCompanies]); // eslint-disable-line react-hooks/exhaustive-deps

  const addCompany = (newCompany) => {
    setCompany([...company, newCompany]);
  };

  const removeCompany = async (name) => {
    const filteredUsers = company.filter((element) => element.company !== name);
    try {
      await axios.delete(`${BASE_API_URL}/company/${name}`).then((response) => {
        setCompany(filteredUsers);
      });
    } catch (error) {
      if (error.response) {
        console.log(error.response);
      }
    }
  };
  return (
    <CompanyContext.Provider
      value={{
        addCompany,
        removeCompany,
        company,
        setSelectedCompany,
        selectedCompany,
        userData,
        setUserData,
        resetUserData,
        activeUser,
      }}
      {...props}
    />
  );
};

CompanyContext.Provider.propTypes = {
  value: PropTypes.shape(CompanyProviderShape),
  // children: PropTypes.element,
};

export default CompanyProvider;
