import {Method} from 'axios';
// improve later
export module APIs {
	export enum User {
		'login' = 'login',
		'logout' = 'logout',
	}
	export enum Profile {
		'show_profile' = 'show_profile',
		'upload_image' = 'upload_image',
	}
}
export interface Params {
	[APIs.User.login]: {username: string};
	[APIs.Profile.show_profile]: {id: string; token: string};
	[APIs.Profile.upload_image]: {image_uri: string};
}

export type APIS_TYPE = {
	[P in keyof Params]: {
		path: `/${string}`;
		method: Method;
	};
};
export const prefix: APIS_TYPE = {
	[APIs.User.login]: {
		path: '/login',
		method: 'GET',
	},
	[APIs.Profile.show_profile]: {
		path: '/profile',
		method: 'POST',
	},
	[APIs.Profile.upload_image]: {
		path: '/upload_image',
		method: 'POST',
	},
};
