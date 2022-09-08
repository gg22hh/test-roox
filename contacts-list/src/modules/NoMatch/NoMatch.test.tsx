import { render, screen } from '@testing-library/react';
import { NoMatch } from './NoMatch';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';

test('NoMatch test', () => {
  render(
    <MemoryRouter>
      <NoMatch />
    </MemoryRouter>,
  );
  const noMatch = screen.getByText(/страница не найдена/i);
  expect(noMatch).toBeInTheDocument();
});
