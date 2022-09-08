import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NoMatch.css';

export const NoMatch = () => {
  const navigate = useNavigate();
  return (
    <div className="noMatch">
      <h1>404</h1>
      <h2>Страница не найдена!</h2>
      <p>
        Возможно, она была перемещена или вы просто ввели неверный адрес
        страницы.
      </p>
      <button onClick={() => navigate(-1)}>Назад</button>
    </div>
  );
};
