import React, { useEffect, useState, createContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import firebaseApp from './firebase'
import Feed from './pages/Feed'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import Users from './pages/Users'
import PrivateRoute from './components/PrivateRoute'
import Loading from './components/Loading'
import './App.scss';

export const UserContext = createContext()

function App() {
  const [state, setState] = useState({ loading: true, authenticated: false, user: null })
  const [userDetails, setUserDetails] = useState({})

  const { authenticated, loading } = state;

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
        setUserDetails(JSON.parse(user.displayName)) //as there is no backend 
        //now storing current user details as string in displayName in firebase, see pages/SignUp
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
    return <Loading />;
  }

  return (
    <div >
      <BrowserRouter>
        <UserContext.Provider value={{ userDetails, setUserDetails }}>
          <Switch>
            <Route path="/signup" component={Signup} exact={true} />
            <Route path="/login" component={Login} exact={true} />
            <PrivateRoute path="/feed" component={Feed} exact={true} authenticated={authenticated} />
            <PrivateRoute path="/profile" component={Profile} exact={true} authenticated={authenticated} />
            <PrivateRoute path="/users" component={Users} exact={true} authenticated={authenticated} />
            <Route exact path="/" render={() => <Redirect to="/feed" />} />
          </Switch>
        </UserContext.Provider>
      </BrowserRouter>
    </div >
  );
}

export default App;
