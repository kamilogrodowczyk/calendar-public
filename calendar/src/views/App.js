import React from 'react';
import Register from 'views/Register';
import { Wrapper } from './App.styles';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import CompanyProvider from 'providers/CompanyProvider';
import Dashboard from './Dashboard/Dashboard';
import Login from './Login';
import AuthenticationWrapper from 'components/templates/AuthenticationTemplate';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <CompanyProvider>
            <Switch>
              <Route exact path="/">
                <Redirect to="/:client/login" />
              </Route>
              <Route path="/:client/login">
                <AuthenticationWrapper>
                  <Login />
                </AuthenticationWrapper>
              </Route>
              <Route path="/:client/dashboard">
                <AuthenticationWrapper>
                  <Dashboard />
                </AuthenticationWrapper>
              </Route>
              <Route component={Register} path="/admin/register" />
            </Switch>
          </CompanyProvider>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default App;
