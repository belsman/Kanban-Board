import React from "react";
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthPage from './features/authentication/AuthPage';
import Home from './components/Home';
import Logout from "./features/authentication/Logout";

function Router() {
  const authUserId = useSelector(state => state.authUser.id);

  if (!authUserId) {
    return <AuthPage />;
  }
      
  return (
    <div>
      <nav>
        <Logout />
      </nav>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
         </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Router;