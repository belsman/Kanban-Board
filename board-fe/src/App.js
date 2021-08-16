import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Home from './components/Home';
import AuthPage from './features/authentication/AuthPage';
import { fetchUser } from './features/authentication/AuthenticationSlice';

function App() {
  const user = useSelector(state => state.auth.user);
  const fetchedUserStatus = useSelector(state => state.auth.fetchedUserStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (fetchedUserStatus === 'idle' || fetchedUserStatus === 'loading') {
    return <div>Loading...</div>
  } else if(fetchedUserStatus === 'failure') {
    return <div>An error has occured!</div>
  }

  if (fetchedUserStatus === 'succeeded') {
    if (!user.id) {
      return <AuthPage />
    }
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
