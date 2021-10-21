import React from 'react';
import { render, fireEvent, screen } from 'test-utils';
import SelectYear from './SelectYear';
import { date } from 'data/date';

describe('Select Year', () => {
  it('Renders the component', () => {
    render(<SelectYear />);
  });
  it('Check correct options length', () => {
    render(<SelectYear />);
    let options = screen.getAllByTestId('select-option');
    expect(options).toHaveLength(6);
  });
  it('Shows truthy value', () => {
    render(<SelectYear />);
    fireEvent.change(screen.getByTestId('Year'), { target: { value: date.year } });
    let options = screen.getAllByTestId('select-option');
    for (let i = 0; i < options.length; i++) {
      const actual = 2;
      if (i == actual) {
        continue;
      }
      expect(options[i].selected).toBeFalsy();
      expect(options[actual].selected).toBeTruthy();
    }
  });
});
