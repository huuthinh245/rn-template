import {createStore, applyMiddleware, compose, Store} from 'redux';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import {ActionType} from 'typesafe-actions';
import {combineReducers} from 'redux';
import {actions, user, authEpic} from './user';
import {AuthState} from './user/types';
const mergeAction = {
	...actions,
};
export type ActionsType = ActionType<typeof mergeAction>;

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
	}
}

export interface IRootState {
	user: AuthState;
}
const epicMiddleware = createEpicMiddleware<ActionsType, any, IRootState>({
	// dependencies: API,
});

const rootReducer = combineReducers({
	user,
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
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
