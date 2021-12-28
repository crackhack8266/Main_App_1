import React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import styles from './style';

const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('Login');
  }, 3000);
  return (
    <View style={styles.parentContainer}>
      <StatusBar barStyle="dark-content" backgroundColor={'#ffffff'} />
      <Image
        source={require('../../common/assets/splash.png')}
        style={styles.splashImage}
      />
      <Text style={styles.splashText}>Please wait...</Text>
    </View>
  );
};

export default SplashScreen;
