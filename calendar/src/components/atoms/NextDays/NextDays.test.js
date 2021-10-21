import { date } from 'data/date';
import { addNextDays } from 'helpers/addDays';
import React from 'react';
import { render, screen } from 'test-utils';
import NextDays from './NextDays';

describe('Next Days', () => {
  it('Renders the component', () => {
    render(<NextDays />);
  });
  it('Renders the component with firsts days of next month', () => {
    render(<NextDays />);
    const defaultNextDays = addNextDays(date, date.year, date.month);
    expect(screen.getAllByTestId('days')).toHaveLength(defaultNextDays.length);
  });
});
