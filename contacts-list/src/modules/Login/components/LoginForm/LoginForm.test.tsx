import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../../store';
import { LoginForm } from './LoginForm';
import '@testing-library/jest-dom/extend-expect';

test('LoginForm test', () => {
  const setError = jest.fn();
  render(
    <Provider store={store}>
      <LoginForm setError={setError} />
    </Provider>,
  );
  const login = screen.getByText('Авторизация');
  expect(login).toBeInTheDocument();
});
