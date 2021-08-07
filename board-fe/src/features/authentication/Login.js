import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

function Login() {

  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");

  const history = useHistory();

  return (
    <>
      <div>
        <p>Need to register?</p>
        <button onClick={() => history.push('/register')}>Register</button>
      </div>
      <form>
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