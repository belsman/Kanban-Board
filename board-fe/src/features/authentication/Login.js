import React from 'react';

function Login() {
  return (
    <>
      <div>
        <p>Need to register?</p>
        <button>Register</button>
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