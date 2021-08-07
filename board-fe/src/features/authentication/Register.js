import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


function Register() {

    const [ username, setUsername ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");

    const history = useHistory();

    return (
    <>
      <div>
        <p>Need to login?</p>
        <button onClick={() => history.push('/login')}>Login</button>
      </div>
      <form>
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
            placeholder="Password" required />
        </div>
        <div>
            <button>Login</button>
        </div>
      </form>
    </>
  );
}

export default Register;