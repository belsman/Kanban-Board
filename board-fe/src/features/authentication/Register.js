import React from 'react';
import { useHistory } from 'react-router-dom';


function Register() {

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
            value={''} placeholder="Username" required />
        </div>
        <div>
          <input name="email" type="email"
            value={''} placeholder="Email" required />
        </div>
        <div>
          <input name="password" type="password" value={''}
            placeholder="Password" required />
        </div>
        <div>
          <input name="confirmPassword" type="password" value={''}
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