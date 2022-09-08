import React from 'react';
import './LoginError.css';

export const LoginError = () => {
  return (
    <div className="error">
      <h1>Ошибка!</h1>
      <div>
        Данный пользователь не найден. Возможно допущена ошибка в логине или
        пароле
      </div>
    </div>
  );
};
