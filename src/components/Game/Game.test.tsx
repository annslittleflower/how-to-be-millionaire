import { render, screen } from '@testing-library/react';
// import { userEvent } from '@testing-library/user-event';
import { test, expect } from 'vitest';
import Game from './Game';

test('renders learn react link', () => {
  render(<Game />);
  const linkElement = screen.getByText(/Hello, React/i);
  expect(linkElement).toBeDefined();
});
