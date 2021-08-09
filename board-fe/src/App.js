import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './features/authentication/Login';
import Register from './features/authentication/Register';
import Board from './features/board/Board';
import Home from './components/Home';
import AuthPage from './features/authentication/AuthPage';

function App() {
  const token = null;
  
  if(!token) {
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
