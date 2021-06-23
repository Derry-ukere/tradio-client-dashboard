import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/layout/Dashboard';
import Login from './components/organism/Login';
import Signup from './components/organism/Signup';
import ForgetPassword from './components/organism/ForgetPassword';
import Welcome from './components/organism/Welcome';
import Profile from './components/organism/Profile';
import Data from './components/organism/Data';
import Setting from './components/organism/Setting';
import Security from './components/organism/Security';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/sign-up' exact component={Signup} />
        <Route path='/forgot-password' exact component={ForgetPassword} />
        <Route>
          <Dashboard>
            <Switch>
              <Route path='/dashboard' exact component={Welcome} />
              <Route path='/account' exact component={Profile} />
              <Route path='/data' exact component={Data} />
              <Route path='/settings' exact component={Setting} />
              <Route path='/security' exact component={Security} />




            </Switch>
          </Dashboard>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
