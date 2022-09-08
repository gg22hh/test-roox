import React, { useState } from 'react';
import './MyInput.css';

type MyInputProps = {
  type: string;
  children?: React.ReactNode;
  placeholder: string;
  value: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const MyInput = ({
  type,
  children,
  placeholder,
  value,
  required,
  onChange,
}: MyInputProps) => {
  const [showValidation, setShowValidation] = useState(false);

  return (
    <div className="myInput">
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required
        onFocus={() => setShowValidation(true)}
        onBlur={() => setShowValidation(false)}
      />
      {showValidation && children}
    </div>
  );
};
