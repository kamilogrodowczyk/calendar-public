import { date } from 'data/date';
import { addPastDays } from 'helpers/addDays';
import React from 'react';
import { render, screen } from 'test-utils';
import PastDays from './PastDays';

describe('Past Days', () => {
  it('Renders the component', () => {
    render(<PastDays />);
  });
  it('Renders the component with lasts days of previous month', () => {
    render(<PastDays />);
    const defaultPastDays = addPastDays(date, date.year, date.month);
    expect(screen.getAllByTestId('days')).toHaveLength(defaultPastDays.length);
  });
});
