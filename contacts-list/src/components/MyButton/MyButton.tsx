import React from 'react';
import './MyButton.css';

type MyButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const MyButton = ({ children, onClick }: MyButtonProps) => {
  return (
    <button className="myButton" onClick={onClick}>
      {children}
    </button>
  );
};
