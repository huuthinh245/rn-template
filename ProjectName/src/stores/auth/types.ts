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
  hubId: string;
  roles: Array<string>;
  ssoId: string;
}

export interface UserData {
  username: string;
  hubId: string;
  token: string;
  email: string;
  roles: Array<string>;
  ssoId: string;
}
export interface Login extends Action {
  type: LoginType.start;
  payload: {authorcode: string};
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
