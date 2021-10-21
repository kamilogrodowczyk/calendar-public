import React from 'react';
import { render, fireEvent, screen } from 'test-utils';
import CalendarHeading from './CalendarHeading';
import { date } from 'data/date';
import RecentDays from 'components/atoms/RecentDays/RecentDays';

describe('Calendar Heading', () => {
  // const defaultMonth = new Date().getMonth();
  // afterEach(() => {
  //   date.month = defaultMonth;
  // });
  // const defaultMonthDays = date.displayNumberOfDays(defaultMonth);

  it('Renders the component', () => {
    render(<CalendarHeading />);
  });

  // it('Renders the component with selected date by user', () => {
  //   render(<CalendarHeading />);
  //   expect(screen.getByText(`${date.monthName[date.month]}`).selected).toBeTruthy();
  //   fireEvent.change(screen.getByTestId('Month'), { target: { value: 'lipiec' } });
  //   fireEvent.change(screen.getByTestId('Year'), { target: { value: 2022 } });
  //   expect(screen.getByText('lipiec').selected).toBeTruthy();
  // });

  // it("Renders the component with selected date by user and changed calendar's view", () => {
  //   render(
  //     <>
  //       <CalendarHeading />
  //       <RecentDays />
  //     </>
  //   );

  //   expect(screen.getAllByTestId('thismonth-days')).toHaveLength(defaultMonthDays.length);

  //   const exampleMonth = 'sierpień';

  //   fireEvent.change(screen.getByTestId('Month'), { target: { value: exampleMonth } });
  //   fireEvent.change(screen.getByTestId('Year'), { target: { value: 2021 } });
  //   fireEvent.click(screen.getByText('idź'));

  //   const newMonth = screen.getAllByTestId('thismonth-days');
  //   expect(newMonth).toHaveLength(31);
  // });
});
