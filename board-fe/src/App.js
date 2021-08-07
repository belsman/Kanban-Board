import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './features/authentication/Login';
import Register from './features/authentication/Register';
import Board from './features/board/Board';
import Home from './components/Home';
import AuthPage from './features/authentication/AuthPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={AuthPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
