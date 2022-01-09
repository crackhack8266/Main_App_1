import React, {useState} from 'react';
import {
  StatusBar,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import styles from './styles';
import {Input} from '../../common/components/InputField';
import {CustomButton} from '../../common/components/Button';
import Constants from '../../common/constants';

const renderLoginHeader = () => {
  return (
    <View style={styles.loginLogoContainer}>
      <Image
        source={require('../../common/assets/logo.png')}
        style={styles.loginLogo}
      />
    </View>
  );
};

const renderLoginBody = (setInputEmail, setInputPassword) => {
  return (
    <View style={styles.loginBodyOverlay}>
      <Text style={styles.loginHeader}>Login</Text>
      <View style={styles.horizontalDivider}></View>
      <Input
        set={setInputEmail}
        titletext={Constants.EMAILFIELDIDENTIFICATIONSTRING}
      />
      <Input
        set={setInputPassword}
        titletext={Constants.PASSWORDFIELDIDENTIFICATIONSTRING}
      />
      <TouchableOpacity onPress={null}>
        <Text style={styles.forgotPassText}>Forgot Password?</Text>
      </TouchableOpacity>
      <CustomButton buttitle={Constants.LOGINBUTTONTEXT} />
      <Text style={styles.orText}> OR</Text>
      <CustomButton buttitle={Constants.LOGINWITHFACEBOOKBUTTONTEXT} />
      {/* Starts new temp button added touchablehighlight*/}
      <Text style={styles.orText}> OR</Text>
      <CustomButton buttitle={Constants.TOUCHABLEHIGHLIGHT} />
      {/* Ends*/}
      <View style={styles.registerView}>
        <Text style={styles.registerTextNormal}>Don't have an account?</Text>
        <TouchableOpacity onPress={null}>
          <Text style={styles.registerTextBold}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Login = () => {
  const screenHeight = Dimensions.get('window').height;
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  return (
    <View style={{height: screenHeight, ...styles.parentContainer}}>
      <StatusBar barStyle="light-content" backgroundColor={'#4e4e4e'} />
      <ScrollView>
        <View style={{height: screenHeight + 85}}>
          {renderLoginHeader()}
          {renderLoginBody(setInputEmail, setInputPassword)}
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
