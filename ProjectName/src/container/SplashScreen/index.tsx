import React from 'react';
import {View, Text} from 'react-native';
import {LoginScreenParam} from 'screens';
import {styles} from './styles';

type Props = LoginScreenParam & {};

const LoginScreen: React.FC<Props> = props => {
  const {} = props;
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
    </View>
  );
};

LoginScreen.defaultProps = {};

export default LoginScreen;
