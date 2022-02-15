import * as React from 'react';
import {NavigationContainerRef} from '@react-navigation/native';
import {RootStackParamList} from 'screens';
export const navigationRef =
	React.createRef<NavigationContainerRef<RootStackParamList>>();
/**
 * Navigate to a route in current navigation tree.
 *
 * @param routeName Name of the route to navigate to.
 * @param [params] Params object for the route.
 */

const navigate = <RouteName extends keyof RootStackParamList>(
	...arg: undefined extends RootStackParamList[RouteName]
		? [
				routeName: RouteName,
				params?: RootStackParamList[RouteName],
				callback?: () => void,
		  ]
		: [
				routeName: RouteName,
				params: RootStackParamList[RouteName],
				callback?: () => void,
		  ]
) => {
	navigationRef.current?.navigate(
		arg[0] as keyof RootStackParamList,
		arg[1] ? arg[1] : undefined,
	);
};

export default {
	navigate,
};
