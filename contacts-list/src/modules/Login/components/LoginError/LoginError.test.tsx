import { render, screen } from '@testing-library/react';
import { LoginError } from './LoginError';
import '@testing-library/jest-dom/extend-expect';

test('LoginError test', () => {
  render(<LoginError />);
  const error = screen.getByText(/ошибка!/i);
  expect(error).toBeInTheDocument();
});
