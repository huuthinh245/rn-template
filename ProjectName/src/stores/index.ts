import {createStore, applyMiddleware, compose, Store} from 'redux';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import {ActionType} from 'typesafe-actions';
import {combineReducers} from 'redux';
import {actions, auth, authEpic} from './authentication';
import {AuthState} from './authentication/types';
export type ActionsType = ActionType<typeof actions>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

export interface IRootState {
  auth: AuthState;
}
const epicMiddleware = createEpicMiddleware<
  ActionsType,
  ActionsType,
  IRootState
>({
  // dependencies: API,
});

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
