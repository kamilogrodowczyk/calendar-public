import { handlers } from 'mocks/handlers';
import { setupServer } from 'msw/node';
import React from 'react';
import { fireEvent, render, screen } from 'test-utils';
import Calendar from './Calendar';

const server = setupServer(...handlers);

describe('Calendar', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  it('Renders the component', () => {
    render(<Calendar />);
    screen.getByText(/Kalendarz/i);
    screen.getByText(/wtorek/i);
    screen.getByText(/^15$/i);
  });

  it('Renders the component with data from db', async () => {
    render(<Calendar />);
    await screen.findByText(/Spotkanie/i);
    await screen.findByText(/Zebranie/i);
  });

  it('Renders the component with properly amount of divs in Calendar Item for selected date', () => {
    render(<Calendar />);

    const exampleMonth = 'maj';

    fireEvent.change(screen.getByTestId('Month'), { target: { value: exampleMonth } });
    fireEvent.change(screen.getByTestId('Year'), { target: { value: 2021 } });
    fireEvent.click(screen.getByText('idź'));
    
    const amountOfDivs = screen.getAllByText(/\b(0?[1-9]|[1-2][0-9]|3[0-1])\b/i)
    expect(amountOfDivs).toHaveLength(42);
  });
});