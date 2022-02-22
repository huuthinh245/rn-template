import {map, mergeMap, catchError, filter} from 'rxjs/operators';
import {of} from 'rxjs';
import {Epic, combineEpics} from 'redux-observable';
import {actions} from '../action/actions';
import API from '../api';
import {AuthAction, LoginType} from '../types';
import {isOfType} from 'typesafe-actions';
import { IRootState } from '@stores';

const loginUserEpic: Epic<AuthAction, AuthAction, IRootState> = action$ =>
	action$.pipe(
		filter(isOfType(LoginType.start)),
		map(action => action.payload),
		mergeMap(({username}) =>
			API.login(username).pipe(
				map(response => {
					switch (response.data.status) {
						case 'OK':
							return actions.loginSuccess({
								email: '',
								token: '',
								id: '1',
							});
						default:
							return actions.loginError('Đăng nhập thất bại');
					}
				}),
				catchError(error => {
					return of(actions.loginError(error.message));
				}),
			),
		),
	);

export default combineEpics(loginUserEpic);
