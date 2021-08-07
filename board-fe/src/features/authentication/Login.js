import React from 'react';
import { useHistory } from "react-router-dom";

function Login() {

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
            value={''} placeholder="Username" required />
        </div>
        <div>
          <input name="password" type="password" value={''}
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