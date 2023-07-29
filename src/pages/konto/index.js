import React, { useEffect } from 'react';
import { useAuthContext } from '../../context/AuthContext';

const Account = () => {
  const { user } = useAuthContext();

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      <h1>Account</h1>
      <p>{user}</p>
    </>
  );
};

export default Account;
