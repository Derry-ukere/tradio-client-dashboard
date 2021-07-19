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
import Addbank from './components/organism/Addbank';
import BankForm from './components/organism/BankForm';
import CardForm from './components/organism/CardForm';
import AddId from './components/molecule/settings/AddId';
import Security from './components/molecule/settings/Security';
import Success from './components/molecule/settings/Success';
import CompleteRegistration from './components/organism/CompleteRegistration';
import CheckEmail from './components/organism/CheckEmail';
import UpdatePassword from './components/organism/UpdataPassword';

function Router() {
  return (  
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/sign-up' exact component={Signup} />
        <Route path='/forgot-password' exact component={ForgetPassword} /> 
        <Route path='/cofirm-email' exact component={CheckEmail} />        
        <Route path="/completeregistration/:id"  exact component={CompleteRegistration}/>
        <Route path="/resetPasswrod/:id"  exact component={UpdatePassword}/>
        <Route>
          <Dashboard>
            <Switch> 
              <Route path='/dashboard' exact component={Welcome} />
              <Route path='/account' exact component={Profile} />
              <Route path='/data' exact component={Data} />
              <Route path='/settings' exact component={Setting} />
              <Route path='/add-bank' exact component={Addbank} />
              <Route path='/bank-form' exact component={BankForm} />
              <Route path='/card-form' exact component={CardForm} />
              <Route path='/add-id' exact component={AddId} />
              <Route path='/security' exact component={Security} />
              <Route path='/success' exact component={Success} />
            </Switch>
          </Dashboard>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
