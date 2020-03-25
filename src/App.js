import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import setupFirebase from './firebase/setup'
import Feed from './pages/Feed'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import Users from './pages/Users'
import PrivateRoute from './components/PrivateRoute'

import firebase from 'firebase'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [state, setState] = useState({ loading: true, authenticated: false, user: null })
  const { authenticated, loading } = state;

  useEffect(() => {
    setupFirebase()
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }, [])

  if (loading) {
    return <p>Loading..</p>;
  }

  return (
    <div >
      <BrowserRouter>
        <Switch>
          <Route path="/signup" component={Signup} exact={true} />
          <Route path="/login" component={Login} exact={true} />
          <PrivateRoute path="/feed" component={Feed} exact={true} authenticated={authenticated} />
          <PrivateRoute path="/profile" component={Profile} exact={true} authenticated={authenticated} />
          <PrivateRoute path="/users" component={Users} exact={true} authenticated={authenticated} />
          <Route exact path="/" render={() => <Redirect to="/feed" />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
