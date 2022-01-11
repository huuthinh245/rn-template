import axios, {
	AxiosRequestConfig,
	AxiosRequestHeaders,
	AxiosResponse,
} from 'axios';
import {API} from '@constants/api';
import {Logger} from './Logger';
import {prefix, APIs, APIS_TYPE, Params} from './APIs';
const timeout = 15000;
const instance = axios.create();

instance.defaults.timeout = timeout;
const logger = (response: AxiosResponse) => {
	if (response && __DEV__) {
		let data = new Logger(response);
		let curl = data.generateCommand();
		console.log(curl);
	}
};
instance.interceptors.request.use(
	function (config) {
		return config;
	},
	function (error) {
		return Promise.reject(error);
	},
);
instance.interceptors.response.use(
	function (response) {
		logger(response);
		return response;
	},
	function (error) {
		logger(error?.response);
		return Promise.reject(error);
	},
);
class ApiEndPoint {
	static type: keyof APIS_TYPE;
	static timeout = 15000;
	static params: {[key: string]: any};
	static getPrefix() {
		return prefix[this.type].path;
	}
	static getBaseURL(): string {
		switch (ApiEndPoint.type) {
			// case path.login:
			// case path.profile:
			default:
				return API.URL;
		}
	}
	static getURL(): string {
		switch (ApiEndPoint.type) {
			case APIs.User.login:
				return (
					this.getBaseURL() + this.getPrefix() + this.getQueryString()
				);
			case APIs.User.login:
			default:
				return this.getBaseURL() + this.getPrefix();
		}
	}

	static getHeader(): AxiosRequestHeaders {
		switch (ApiEndPoint.type) {
			case APIs.Profile.upload_image:
				return {
					'Content-Type': 'multipart/form-data',
					Accept: 'application/json',
				};
			default:
				return {
					'Content-Type': 'application/json;charset=UTF-8',
				};
		}
	}

	static getQueryString() {
		let param = '',
			i = 0;

		for (let key in this.params) {
			if ({}.hasOwnProperty.call(this.params, key)) {
				const data =
					typeof this.params[key] === 'object'
						? JSON.stringify(this.params[key])
						: this.params[key];
				param += i !== 0 ? `&${key}=${data}` : `?${key}=${data}`;
				i++;
			}
		}
		return param;
	}
}

const post = <T extends keyof Params, P extends Params[T]>(
	action: T,
	param: P,
) => {
	ApiEndPoint.type = action;
	const config: AxiosRequestConfig = {
		headers: ApiEndPoint.getHeader(),
		timeout: ApiEndPoint.timeout,
	};
	return instance.post(ApiEndPoint.getURL(), param, config);
};

const get = <T extends keyof Params, P extends Params[T]>(
	action: T,
	param: P,
) => {
	ApiEndPoint.type = action;
	ApiEndPoint.params = param as unknown as object;
	const config: AxiosRequestConfig = {
		headers: ApiEndPoint.getHeader(),
		timeout: ApiEndPoint.timeout,
	};
	return instance.get(ApiEndPoint.getURL(), config);
};

const postImage = <T extends keyof Params, P extends Params[T]>(
	action: T,
	param: P,
) => {
	ApiEndPoint.type = action;
	const config: AxiosRequestConfig = {
		headers: ApiEndPoint.getHeader(),
		timeout: ApiEndPoint.timeout,
	};
	return instance.post(ApiEndPoint.getURL(), param, config);
};

export default {
	post,
	get,
	postImage,
};
