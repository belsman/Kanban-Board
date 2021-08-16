import React, { useEffect, useState } from 'react';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import AuthPage from './features/authentication/AuthPage';
import { fetchUser } from './features/authentication/AuthenticationSlice';
import './App.css';

function App() {
  const [ fetchingUser, setFetchingUser ] = useState(true);
  const [ error, setError ] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const resultAction = dispatch(fetchUser());
      unwrapResult(resultAction);
    } catch (err) {
      setError(err);
    } finally {
      setFetchingUser(false);
    }
  }, [dispatch]);

  const authUser = useSelector(state => state.authUser);

  if (fetchingUser) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error has occured!</div>;
  }

  if (!authUser.id) {
    return <AuthPage />;
  }
  
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
