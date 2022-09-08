import React, { useState } from 'react';
import { MyButton } from '../../../../components/MyButton/MyButton';
import { MyInput } from '../../../../components/MyInput/MyInput';
import { useAppDispatch } from '../../../../store';
import { useAddUserMutation } from '../../../../store/api/usersApi';
import { logIn } from '../../../../store/slices/auth';
import { NameValidation } from './components/NameValidation';
import { useValidation } from './helpers/useValidation';
import './RegisterForm.css';

export const RegisterForm = () => {
  const register = useValidation();
  const dispatch = useAppDispatch();
  const [addUser] = useAddUserMutation();

  const handleRegisterForm = (e: React.FormEvent) => {
    e.preventDefault();

    const isValidate = Object.values(register.loginValidation).every(
      (el) => el,
    );

    console.log(register.loginValidation);

    if (register.nameValidation && isValidate) {
      addUser({ ...register.userData, contacts: [] });
      dispatch(logIn());
    }
  };

  return (
    <form onSubmit={handleRegisterForm}>
      <h1 className="register__title">Регистрация</h1>
      <div className="register__inputs">
        <MyInput
          type="text"
          placeholder="Имя"
          value={register.userData.name}
          onChange={register.handleNameChange}
          required
        >
          <NameValidation isValidate={register.nameValidation} />
        </MyInput>
        <MyInput
          type="text"
          placeholder="Логин"
          value={register.userData.login}
          onChange={register.handleLoginChange}
          required
        />
        <MyInput
          type="password"
          placeholder="Пароль"
          value={register.userData.password}
          onChange={register.handlePasswordChange}
          required
        />
      </div>
      <MyButton>Продолжить</MyButton>
    </form>
  );
};
