import '@testing-library/jest-dom';
import React from 'react';
import { Router } from 'react-router';
import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from 'test-utils';
import Dashboard from './Dashboard';
import CompanyProvider from 'providers/CompanyProvider';
import { createMemoryHistory } from 'history';
import { setupServer } from 'msw/node';
import { handlers } from 'mocks/handlers';

const server = setupServer(...handlers);

describe('Dashboard', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  const history = createMemoryHistory();
  const renderDashboardWithProvider = () => {
    render(
      <Router history={history}>
        <CompanyProvider>
          <Dashboard />
        </CompanyProvider>
      </Router>
    );
  };
  it('Renders the component', async () => {
    renderDashboardWithProvider();

    const dayWithEvent = screen.getAllByText(/^7$/i);
    fireEvent.mouseOver(dayWithEvent[1]);
    const button = await screen.findAllByText(/Pokaż/i);
    fireEvent.click(button[0]);
    screen.getByText(/edytuj/i);
  });

  it('Shows Edit-Input Modal after click on Edytuj-button', async () => {
    renderDashboardWithProvider();

    const dayWithEvent = screen.getAllByText(/^7$/i);
    fireEvent.mouseOver(dayWithEvent[1]);
    const button = await screen.findAllByText(/Pokaż/i);
    fireEvent.click(button[0]);

    fireEvent.click(screen.getByText(/edytuj/i));

    screen.getByPlaceholderText(/Tytuł/i);
    screen.getByDisplayValue(/Spotkanie/i);
  });

  it('Edits event', async () => {
    renderDashboardWithProvider();

    await screen.findByText(/Spotkanie/i);

    const dayWithEvent = screen.getAllByText(/^7$/i);
    fireEvent.mouseOver(dayWithEvent[1]);
    const button = await screen.findAllByText(/Pokaż/i);
    fireEvent.click(button[0]);

    fireEvent.click(screen.getByText(/edytuj/i));

    fireEvent.change(screen.getByPlaceholderText('Tytuł'), { target: { value: 'Impreza' } });
    fireEvent.change(screen.getByPlaceholderText('Czas'), { target: { value: '20:00' } });
    fireEvent.submit(screen.getByTestId('submit-button'));

    await waitFor(() => {
      screen.getByText(/Wydarzenie zostało zmienione/i);
      screen.getAllByText(/Impreza/i);
      screen.getByText(/20:00/i);
    });

    expect(screen.queryByText(/Spotkanie/i)).not.toBeInTheDocument();
  });
  it('Removes event', async () => {
    renderDashboardWithProvider();

    await screen.findByText(/Spotkanie/i);

    const dayWithEvent = screen.getAllByText(/^7$/i);
    fireEvent.mouseOver(dayWithEvent[1]);
    const button = await screen.findAllByText(/Pokaż/i);
    fireEvent.click(button[0]);

    fireEvent.click(screen.getByText(/usuń/i));

    screen.getByText(/Czy na pewno chcesz usunąć wydarzenie/i);
    fireEvent.click(screen.getByTestId('button-to-remove'));

    const deletedEvent = screen.getAllByText(/Spotkanie/i);
    await waitForElementToBeRemoved(deletedEvent);
  });
});
