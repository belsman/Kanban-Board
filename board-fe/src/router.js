import React from "react";
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthPage from './features/authentication/AuthPage';
// import Home from './components/Home';
// import Logout from "./features/authentication/Logout";
import BoardList from "./features/board/BoardList";
import Board from "./features/board/Board";

function Router() {
  const authUserId = useSelector(state => state.authUser.id);

  if (!authUserId) {
    return <AuthPage />;
  }
      
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={BoardList} />
        <Route exact path="/boards/:boardId" component={Board} />
        <Route exact path="/boards" component={BoardList} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
