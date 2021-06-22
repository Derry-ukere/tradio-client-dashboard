import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/layout/Dashboard';
import Login from './components/organism/Login';
import Signup from './components/organism/Signup';
import ForgetPassword from './components/organism/ForgetPassword';
import Welcome from './components/organism/Welcome';

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
              <Route path='/test' exact component={Welcome} />
            </Switch>
          </Dashboard>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
