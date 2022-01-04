import {AuthAction, AuthState, LoginType} from '../types';

const defaultState: AuthState = {
	loading: false,
	error: '',
	username: '',
	token: '',
};
const authentication = (
	state: AuthState = defaultState,
	action: AuthAction,
): AuthState => {
	switch (action.type) {
		case LoginType.start:
			// const n= action.payload.data
			return {
				...state,
				error: '',
				loading: true,
			};
		case LoginType.success:
			return {
				...state,
				token: action.payload.data.token,
				loading: false,
			};
		case LoginType.error:
			return {
				...state,
				error: action.payload.message,
				loading: false,
			};
		default:
			return state;
	}
};

export default authentication;
