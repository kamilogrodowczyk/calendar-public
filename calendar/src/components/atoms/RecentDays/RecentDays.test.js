import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from 'test-utils';
import RecentDays from './RecentDays';
import { handlers } from 'mocks/handlers';
import { setupServer } from 'msw/node';

describe('Recent Days', () => {
  it('Renders the component with events', async () => {
    render(<RecentDays />);
    // await screen.findByText(/Spotkanie/i);
    // await screen.findByText(/Zebranie/i);
  });
});
