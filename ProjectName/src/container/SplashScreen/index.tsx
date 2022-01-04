import React, {FunctionComponent} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

const LoginScreen: FunctionComponent = () => {
	return (
		<View style={styles.container}>
			<Text>LoginScreen</Text>
		</View>
	);
};

LoginScreen.defaultProps = {};

export default LoginScreen;
