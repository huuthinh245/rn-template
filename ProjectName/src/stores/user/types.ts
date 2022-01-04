import {Action} from 'redux';
export enum LoginType {
	start = 'LOGIN-START',
	success = 'LOGIN-SUCCESS',
	error = 'LOGIN-ERROR',
}

export interface AuthState {
	loading: boolean;
	error?: string;
	username: string;
	token: string;
}

export interface UserData {
	token: string;
	email: string;
	id: string;
}
export interface Login extends Action {
	type: LoginType.start;
	payload: {username: string};
}
export interface LoginError extends Action {
	type: LoginType.error;
	payload: {message: string};
}

export interface LoginSuccess extends Action {
	type: LoginType.success;
	payload: {data: UserData};
}

export type AuthAction = Login | LoginError | LoginSuccess;
