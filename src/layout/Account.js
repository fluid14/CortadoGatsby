import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';

const Account = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      <h1>Account</h1>
      {/*<p>{user}</p>*/}
    </>
  );
};

export default Account;
