import APIManager from '@network/APIManager';
import {AxiosResponse} from 'axios';
import {Model} from '@network/type';
import {APIs} from '@network/APIs';
import {from, Observable} from 'rxjs';
import {UserData} from '../types';
const login = (
	username: string,
): Observable<AxiosResponse<Model<UserData>>> => {
	return from(APIManager.post(APIs.User.login, {username}));
};

const getProfile = (token: string, id: string): Promise<AxiosResponse<any>> => {
	return APIManager.get(APIs.Profile.show_profile, {id, token});
};

export default {
	login,
	getProfile,
};
