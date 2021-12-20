import React from 'react';
import {View, Text} from 'react-native';
import {SplashScreenParam} from 'screens';
import {styles} from './styles';

type Props = SplashScreenParam & {};

const SplashScreen: React.FC<Props> = props => {
  const {} = props;
  return (
    <View style={styles.container}>
      <Text>SplashScreen</Text>
    </View>
  );
};

SplashScreen.defaultProps = {};

export default SplashScreen;
