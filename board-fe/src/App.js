import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import AuthPage from './features/authentication/AuthPage';
import { useSelector } from 'react-redux';

function App() {
  const token = useSelector(state => state.auth.token);

  if (!token) {
    return <AuthPage />
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
