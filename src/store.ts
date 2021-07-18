
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from './reducers/root';
import thunk from 'redux-thunk';

// const userInfoFromStorage = localStorage.getItem('userInfo');
// let userStorage;
// if(userInfoFromStorage) {
//   userStorage = JSON.parse(userInfoFromStorage);
// }

// const initialState = { userInfo: userStorage };

const store  = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type RootStore = ReturnType<typeof rootReducer>
export default store;
