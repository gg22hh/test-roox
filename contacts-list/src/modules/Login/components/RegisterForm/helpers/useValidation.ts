import React, { useEffect, useState } from 'react';
import { useGetUsersQuery } from '../../../../../store/api/usersApi';

export const useValidation = () => {
  const [userData, setUserData] = useState({
    name: '',
    login: '',
    password: '',
  });
  const [nameValidation, setNameValidation] = useState(false);
  const [loginValidation, setLoginValidation] = useState({
    length: '',
    isLoginExist: '',
  });

  const { data = [] } = useGetUsersQuery();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, name: e.target.value });
    /[а-яА-Я]/.test(e.target.value)
      ? setNameValidation(true)
      : setNameValidation(false);
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, login: e.target.value });
  };

  useEffect(() => {
    console.log(userData.login.length);
    userData.login.length > 4
      ? setLoginValidation({ ...loginValidation, length: '1' })
      : setLoginValidation({ ...loginValidation, length: '' });
  }, [loginValidation.length, userData.login]);

  // useEffect(() => {
  //   const isLoginExist = data?.every((user) => user.login !== userData.login);
  //   setLoginValidation({
  //     ...loginValidation,
  //     isLoginExist: isLoginExist ? '1' : '',
  //   });
  // }, [loginValidation.isLoginExist, userData.login]);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, password: e.target.value });
  };

  return {
    userData,
    handleNameChange,
    nameValidation,
    handleLoginChange,
    loginValidation,
    handlePasswordChange,
  };
};
