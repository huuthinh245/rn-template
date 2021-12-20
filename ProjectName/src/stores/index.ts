import {createStore, applyMiddleware, compose, Store} from 'redux';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import {combineReducers} from 'redux';
import {auth, authEpic} from './Authentication';
import {AuthState} from './Authentication/types';

const epicMiddleware = createEpicMiddleware();
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export interface IRootState {
  auth: AuthState;
}

const rootReducer = combineReducers({
  auth,
});

const rootEpic = combineEpics(authEpic);

// let middlewares = []
// if (__DEV__) {
//   const createDebugger = require('redux-flipper').default;
//   middlewares.push(createDebugger());
// }
//const finalReducer = persistReducer(config, {reducers})

const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose) || compose;
const enhancer = composeEnhancers(
  applyMiddleware(
    epicMiddleware,
    // ...middlewares
  ),
);
const store: Store<IRootState, any> = createStore(rootReducer, enhancer);
epicMiddleware.run(rootEpic);
export default store;
