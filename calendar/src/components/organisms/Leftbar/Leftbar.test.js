import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from 'test-utils';
import { handlers } from 'mocks/handlers';
import { setupServer } from 'msw/node';
import Leftbar from './Leftbar';
import { Router } from 'react-router';
import CompanyProvider from 'providers/CompanyProvider';
import { createMemoryHistory } from 'history';
import Calendar from '../Calendar/Calendar';

const server = setupServer(...handlers);

describe('Leftbar', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  const history = createMemoryHistory();
  const renderLeftbarWithProvider = (isRendered = false) => {
    render(
      <Router history={history}>
        <CompanyProvider>
          <Leftbar />
          {isRendered ? <Calendar /> : null}
        </CompanyProvider>
      </Router>
    );
  };
  it('Renders the component', async () => {
    renderLeftbarWithProvider();

    screen.getByText(/przejdź/i);
    screen.getByText(/wyloguj/i);
    await screen.findByText(/Krispol/i);
  });

  it('Adds new company', async () => {
    renderLeftbarWithProvider();

    fireEvent.change(screen.getByPlaceholderText('Dodaj nową firmę'), { target: { value: 'Computercenter' } });
    fireEvent.submit(screen.getByPlaceholderText('Dodaj nową firmę'));

    await waitFor(() => screen.getByText(/Computercenter/i));
  });

  it('Deletes a company', async () => {
    renderLeftbarWithProvider();

    await screen.findByText(/Krispol/i);
    const removeButton = screen.getAllByTestId('remove-company');
    fireEvent.click(removeButton[0]);
    await waitForElementToBeRemoved(() => screen.getByText(/Krispol/i));
  });
  it('Warns about duplicates', async () => {
    renderLeftbarWithProvider();

    await screen.findByText(/Krispol/i);
    fireEvent.change(screen.getByPlaceholderText('Dodaj nową firmę'), { target: { value: 'Krispol' } });
    fireEvent.submit(screen.getByPlaceholderText('Dodaj nową firmę'));
    await waitFor(() => screen.getByText(/Firma o tej nazwie już istnieje./i));
    await waitForElementToBeRemoved(() => screen.getByText(/Firma o tej nazwie już istnieje./i), { timeout: 5000 });
  });

  it('Changes company by clicking on it and shows company name in Calendar Heading component.', async () => {
    renderLeftbarWithProvider(true);

    fireEvent.click(await screen.findByText(/Krispol/i));
    expect(screen.getAllByText(/Krispol/i)).toHaveLength(2);
  });

  it('Changes company by clicking on it and shows events only for selected company', async () => {
    renderLeftbarWithProvider(true);

    const event = await screen.findByText(/Spotkanie/i);
    fireEvent.click(await screen.findByText(/Krispol/i));
    expect(event).not.toBeInTheDocument();
  });
});
