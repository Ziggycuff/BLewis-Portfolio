import { render, screen } from '@testing-library/react';
import App from './App';

test('renders name in header', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /brandon lewis/i, level: 1 })).toBeInTheDocument();
});
