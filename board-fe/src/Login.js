import React, { useState } from 'react';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }

    const submitHandler = (e) => {
        e.preventDefault();
        //console.log(username, password);
        console.log(postData('http://localhost:8000/api-token-auth/', { username, password }));
        // dispatch(loginUserAsync(formData));
    };

    return (
        <form method="POST" onSubmit={submitHandler}>
            <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="enter username" />
            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="enter password" />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Login;
