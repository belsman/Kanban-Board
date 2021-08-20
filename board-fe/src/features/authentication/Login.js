import React, { useState } from 'react';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { login } from './AuthenticationSlice';

function Login({ setToggle }) {

  const dispatch = useDispatch();

  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ addRequestStatus, setAddRequestStatus ] = useState('idle');


  const handleSubmit = e => {
    e.preventDefault();
    try {
      setAddRequestStatus('pending');
      const resultAction = dispatch(login({ username, password }));
      unwrapResult(resultAction);
    } catch (err) {
      console.error(err.message);
    } finally {
      setAddRequestStatus('idle');
    }
    
    return () => {
      setAddRequestStatus('idle');
    }
  };

  if (addRequestStatus === 'pending') {
    return <h3>Loading....</h3>
  }
  
  return (
    <>
      <div>
        <p>Need to register?</p>
        <button onClick={() => setToggle(false)}>Register</button>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input name="username" type="text"
            onChange={(e) => {setUsername(e.target.value)}}
            value={username} placeholder="Username" required />
        </div>
        <div>
          <input name="password" type="password" value={password}
            onChange={(e) => {setPassword(e.target.value)}}
            placeholder="Password" required />
        </div>
        <div>
            <button>Login</button>
        </div>
      </form>
    </>
  );
}

export default Login;