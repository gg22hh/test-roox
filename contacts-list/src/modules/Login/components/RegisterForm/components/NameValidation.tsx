import React from 'react';

type NameValidationProps = {
  isValidate: boolean;
};

export const NameValidation = ({ isValidate }: NameValidationProps) => {
  const color = isValidate ? 'green' : 'red';
  return (
    <ul style={{ textAlign: 'left' }}>
      <li style={{ color: color }}>Кириллица</li>
    </ul>
  );
};
