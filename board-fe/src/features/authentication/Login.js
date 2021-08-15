import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './AuthenticationSlice';

function Login({ setToggle }) {

  const dispatch = useDispatch();

  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log("...submitting to the server");
    dispatch(login({ username, password }));
  };

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