import React from 'react';
import { fireEvent, render, screen } from 'test-utils';
import CalendarItem from './CalendarItem';
import { date } from 'data/date';
import CalendarHeading from '../CalendarHeading/CalendarHeading';


describe('Calendar Item', () => {
  const getAmountOfDivs = (latestDay) => {
    const defaultMonth = new Date(date.year, date.month, 1);
    const nameDay = defaultMonth.getDay();
    for (let i = 2; i <= latestDay; i++) {
      if (nameDay === i) {
        expect(screen.getAllByText(/\b(0?[1-9]|[1-2][0-9]|3[0-1])\b/i)).toHaveLength(35);
      }
    }
  };
  it('Renders the component', () => {
    render(<CalendarItem />);
  });

  it('Renders the component with properly amount of divs in calendar for default date', () => {
    render(<CalendarItem />);
    const displayDays = 32 - new Date(date.year, date.month, 32).getDate();

    if (displayDays === 29) {
      getAmountOfDivs(6);
    } else if (displayDays === 30) {
      getAmountOfDivs(5);
    } else if (displayDays === 31) {
      getAmountOfDivs(4);
    }
  });

  it('Renders the component with properly amount of divs in Calendar Item for selected date', () => {
    render(
      <>
        <CalendarHeading />
        <CalendarItem />
      </>
    );

    const exampleMonth = 'maj';

    fireEvent.change(screen.getByTestId('Month'), { target: { value: exampleMonth } });
    fireEvent.change(screen.getByTestId('Year'), { target: { value: 2021 } });
    fireEvent.click(screen.getByText('idź'));
    
    const amountOfDivs = screen.getAllByText(/\b(0?[1-9]|[1-2][0-9]|3[0-1])\b/i)
    expect(amountOfDivs).toHaveLength(42);
  });
});
