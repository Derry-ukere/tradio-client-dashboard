import { combineReducers } from 'redux';
import DemoReducers from './demo';
import LoginReducer from './login';
import RegisterReducer from './register';
import CompleteRegistration from './completeRegistration';
import UpdateEmailAndPassword from './updateMailAndPassword';
import ResetPassword from './passwordReset';
import SendResetMail from './sendMail';
import UpdatePayment from './updatePayment';

export const rootReducer = combineReducers({
  demo:DemoReducers.demo,
  login:LoginReducer.login,
  register:RegisterReducer.register,
  completeReg : CompleteRegistration.register,
  UpdateEmailAndPassword:UpdateEmailAndPassword.update,
  ResetPassword:ResetPassword.reset,
  SendResetMail:SendResetMail.send,
  UpdatePayment:UpdatePayment.login,

});
