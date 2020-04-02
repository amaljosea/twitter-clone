import React, { useContext, createContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Feed from './pages/Feed'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import Users from './pages/Users'
import PrivateRoute from './components/PrivateRoute'
import { AuthContext } from './components/AuthProvider'
import Loading from './components/Loading'
import './App.scss';

export const UserContext = createContext()

function App() {
  const { authenticated, loading } = useContext(AuthContext)

  if (loading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userDetails: "", setUserDetails: () => "" }}>
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
  );
}

export default App;
