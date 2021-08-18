import React, { useEffect, useState } from 'react';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import Router from './router';
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

  if (fetchingUser) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error has occured!</div>;
  }

  return <Router />
}

export default App;
