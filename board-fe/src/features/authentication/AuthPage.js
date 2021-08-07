import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

function AuthPage() {
  const [ loginOrRegister, setLoginOrRegister ] = useState(true);

  return (
    loginOrRegister ? 
    <Login setToggle={setLoginOrRegister} />
    :
    <Register setToggle={setLoginOrRegister} />
  );
}

export default AuthPage;
