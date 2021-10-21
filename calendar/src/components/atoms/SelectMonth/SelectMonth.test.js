import React from 'react';
import { render, fireEvent, screen } from 'test-utils';
import SelectMonth from './SelectMonth';

describe('Select Month', () => {
  it('Renders the component', () => {
    render(<SelectMonth />);
  });
  it('Check correct options length', () => {
    render(<SelectMonth />);
    let options = screen.getAllByTestId('select-option');
    expect(options).toHaveLength(12);
  });
  it('Shows truthy value', () => {
    render(<SelectMonth />);
    fireEvent.change(screen.getByTestId('Month'), { target: { value: 'luty' } });
    let options = screen.getAllByTestId('select-option');
    for (let i = 0; i < options.length; i++) {
      const actual = 1;
      if (i == actual) {
        continue;
      }
      expect(options[i].selected).toBeFalsy();
      expect(options[actual].selected).toBeTruthy();
    }
  });
});
