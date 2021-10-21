import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent, render, screen, waitFor } from 'test-utils';
import InputModal from './InputModal';
import RecentDays from 'components/atoms/RecentDays/RecentDays';
import { handlers } from 'mocks/handlers';
import { setupServer } from 'msw/node';
import Calendar from '../Calendar/Calendar';

const server = setupServer(...handlers);

describe('Input Modal', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  it('Renders the component', () => {
    render(<InputModal isShowingInputModal={true} />);
    screen.getByPlaceholderText('Tytuł');
  });
  it('Displays modal after click', () => {
    render(
      <>
        <Calendar />
        <InputModal />
      </>
    );
    fireEvent.click(screen.getByText(/^8$/i));
    screen.getByPlaceholderText('Tytuł');
  });
  it("Adds properly first event to database and shows this event's title and hour on Calendar Component", async () => {
    render(
      <>
        <Calendar />
        <InputModal />
      </>
    );

    fireEvent.click(screen.getByText(/^12$/i));

    fireEvent.change(screen.getByPlaceholderText('Tytuł'), { target: { value: 'Spotkanie' } });
    fireEvent.change(screen.getByPlaceholderText('Czas'), { target: { value: '12:00' } });
    fireEvent.change(screen.getByPlaceholderText('Opis'), { target: { value: '' } });
    fireEvent.change(screen.getByPlaceholderText('Uwagi'), { target: { value: '' } });

    fireEvent.submit(screen.getByText('Dodaj'));
    await waitFor(() => {
      screen.getByText(/Spotkanie/i);
      screen.getByText(/12:00/i);
    });
  });
  it("Displays error after submitting if title doesn't exist", async () => {
    render(<InputModal isShowingInputModal={true} />);

    fireEvent.change(screen.getByPlaceholderText('Tytuł'), { target: { value: '' } });

    fireEvent.submit(screen.getByText('Dodaj'));
    await waitFor(() => screen.getByText(/Tytuł jest wymagany/i));
  });
  it('Adds properly next event with the same date to database', async () => {
    render(
      <>
        <Calendar />
        <InputModal />
      </>
    );

    const dayWithEvent = screen.getAllByText(/^7$/i);
    fireEvent.mouseOver(dayWithEvent[1]);

    const hoverOnDayWithEvent = await screen.findAllByText(/Dodaj/i);
    fireEvent.click(hoverOnDayWithEvent[0]);

    fireEvent.change(screen.getByPlaceholderText('Tytuł'), { target: { value: 'Drugie spotkanie' } });

    fireEvent.submit(screen.getByTestId('submit-button'));

    await waitFor(() => screen.getByText(/Drugie/i));
  });
});
