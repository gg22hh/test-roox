import React, { useState } from 'react';
import { MyButton } from '../../../../components/MyButton/MyButton';
import { MyInput } from '../../../../components/MyInput/MyInput';
import { useAppDispatch } from '../../../../store';
import { useGetUsersQuery } from '../../../../store/api/usersApi';
import { logIn } from '../../../../store/slices/auth';
import './LoginForm.css';

type LoginFormProps = {
  setError: (value: boolean) => void;
};

export const LoginForm = ({ setError }: LoginFormProps) => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useAppDispatch();
  const { data } = useGetUsersQuery();

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();

    const isUserExist = data?.some(
      (user) => user.login === login && user.password === password,
    );

    if (isUserExist) {
      dispatch(logIn());
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <h1 className="form__title">Авторизация</h1>
      <div className="form__inputs">
        <MyInput
          type="text"
          placeholder="Логин"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          required
        />
        <MyInput
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <MyButton>Войти</MyButton>
    </form>
  );
};
