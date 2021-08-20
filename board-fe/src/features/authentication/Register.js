import React, { useState } from 'react';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { register } from './authenticationSlice';

function Register({ setToggle }) {
    const [ username, setUsername ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const [ addRequestStatus, setAddRequestStatus ] = useState('idle');

    const dispatch = useDispatch();

    const handleSubmit = e => {
      e.preventDefault();
      try {
        setAddRequestStatus('pending');
        const resultAction = dispatch(register({ username, email, password }));
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
        <p>Need to login?</p>
        <button onClick={() => setToggle(true)}>Login</button>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div>
          <input name="username" type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username} placeholder="Username" required />
        </div>
        <div>
          <input name="email" type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email} placeholder="Email" required />
        </div>
        <div>
          <input name="password" type="password" value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password" required />
        </div>
        <div>
          <input name="confirmPassword" type="password" value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password" required />
        </div>
        <div>
            <button>Register</button>
        </div>
      </form>
    </>
  );
}

export default Register;