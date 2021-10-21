import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from 'test-utils';
import Rightbar from './Rightbar';

describe('Righbar', () => {
  it("Visibility the component", () => {
    render(<Rightbar />);
    const rightbar = screen.getByTestId('rightbar')
    expect(rightbar).not.toBeVisible();
  });
});
