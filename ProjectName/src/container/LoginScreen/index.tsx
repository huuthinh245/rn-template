import React from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {SplashScreenParam} from 'screens';
import {actions, UserApi} from '@stores/user';
import {styles} from './styles';

type Props = SplashScreenParam & {};

const SplashScreen: React.FC<Props> = props => {
	const {} = props;
	const dispatch = useDispatch();
	const onLogin = () => {
		dispatch(actions.login({username: 'aaa'}));
	};

	const onProfile = () => {
		let token = '123456';
		let id = '1';
		dispatch(actions.login({username: 'aaa'}));
		UserApi.getProfile(token, id)
			.then(() => {})
			.catch(() => {});
	};
	return (
		<View style={styles.container}>
			<Text onPress={onLogin}>LoginScreen</Text>
			<Text onPress={onProfile}>get profile</Text>
		</View>
	);
};

SplashScreen.defaultProps = {};

export default SplashScreen;
