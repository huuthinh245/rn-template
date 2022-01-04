import {action} from 'typesafe-actions';
import {Login, LoginError, LoginSuccess, LoginType, UserData} from '../types';

const login = ({username = ''}: {username: string}): Login =>
	action(LoginType.start, {username: username});

const loginSuccess = (userInfo: UserData): LoginSuccess =>
	action(LoginType.success, {data: userInfo});

const loginError = (message: string = ''): LoginError =>
	action(LoginType.error, {message: message});

const actions = {
	login,
	loginSuccess,
	loginError,
};

export {actions};
