import React, {memo} from 'react';
import {View, Text} from 'react-native';
import {HomeScreenParam} from 'screens';
import {styles} from './styles';

type Props = HomeScreenParam & {};

const HomeScreen: React.FC<Props> = memo(props => {
	const { navigation} = props;
	const gg = () => {

	}
	return (
		<View style={styles.container}>
			<Text>HomeScreen</Text>
		</View>
	);
});

HomeScreen.defaultProps = {};

export default HomeScreen;
