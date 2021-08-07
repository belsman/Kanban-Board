import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './features/authentication/Login';
import Register from './features/authentication/Register';
import Board from './features/board/Board';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Board} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
