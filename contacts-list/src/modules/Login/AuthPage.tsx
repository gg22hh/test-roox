import React, { useState } from 'react';
import { LoginError } from './components/LoginError/LoginError';
import { LoginForm } from './components/LoginForm/LoginForm';
import './AuthPage.css';
import { RegisterForm } from './components/RegisterForm/RegisterForm';

export const AuthPage = () => {
  const [error, setError] = useState(false);
  const [selectedForm, setSelectedForm] = useState(0);

  return (
    <>
      {error && <LoginError />}
      <div className="form">
        <div className="form__toggle">
          <button
            className={selectedForm === 0 ? 'active' : ''}
            onClick={() => setSelectedForm(0)}
          >
            Авторизация
          </button>
          <button
            className={selectedForm === 1 ? 'active' : ''}
            onClick={() => setSelectedForm(1)}
          >
            Регистрация
          </button>
        </div>
        {selectedForm === 0 && <LoginForm setError={setError} />}
        {selectedForm === 1 && <RegisterForm />}
      </div>
    </>
  );
};
