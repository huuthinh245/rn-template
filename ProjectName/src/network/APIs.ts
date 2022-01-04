// class APIs {
// 	static user: APIs.User;
// 	static order: APIs.Order;
// }
// module APIs
// {
// 	export enum User {
// 		'login' = 'login',
// 		'profile' = 'profile',
// 		'upload_image' = 'upload_image',
// 	}
// 	export enum Order {
// 		'login' = 'login',
// 		'profile' = 'profile',
// 		'upload_image' = 'upload_image',
// 	}

// }

export module APIs {
	export enum User {
		'login' = 'login',
		'logout' = 'logout',
	}
	export enum Profile {
		'show_profile' = 'show_profile',
		'upload_image' = 'upload_image',
	}
	export type Params = {
		[APIs.User.login]: {username: string};
		[APIs.Profile.show_profile]: {id: string; token: string};
		[APIs.Profile.upload_image]: {image_uri: string};
	};
}

export const prefix = {
	[APIs.User.login]: './login',
	[APIs.Profile.show_profile]: '/show_profile',
	[APIs.Profile.upload_image]: '/upload_image',
};

//...

// export { APIs };
