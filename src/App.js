import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route , Redirect} from 'react-router-dom'

import Feed from './pages/Feed'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import Users from './pages/Users'




function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup" component={Signup} exact={true} />
        <Route path="/login" component={Login} exact={true} />
        <Route path="/feed" component={Feed} exact={true} />
        <Route path="/profile" component={Profile} exact={true} />
        <Route path="/users" component={Users} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/login" />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
