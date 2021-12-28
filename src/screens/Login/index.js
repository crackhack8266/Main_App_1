import React, {useState} from 'react';
import {StatusBar, View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Input} from '../../common/components/InputField';
import {CustomButton} from '../../common/components/Button';
import Constants from '../../common/constants';

/*const LoginScreen = () => {
  renderLoginHeader = (email, password) => {
    return (
      
    );
  }
  return (
    {renderLoginHeader()}
    {this.renderLoginBody()}
  )
}
*/

const Login = () => {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  return (
    <View style={styles.parentContainer}>
      {/*
      {renderLoginHeader(inputEmail, inputPassword)}
      {renderLoginBody}
        */}
      <StatusBar barStyle="light-content" backgroundColor={'#4e4e4e'} />
      <View style={styles.loginLogoContainer}>
        <Image
          source={require('../../common/assets/logo.png')}
          style={styles.loginLogo}
        />
      </View>
      <View style={styles.loginBodyOverlay}>
        <Text style={styles.loginHeader}>Login</Text>
        <View style={styles.horizontalDivider}></View>
        <Input set={setInputEmail} titletext="Email ID" />
        <Input set={setInputPassword} titletext="Password" />
        <TouchableOpacity onPress={null}>
          <Text style={styles.forgotPassText}>Forgot Password?</Text>
        </TouchableOpacity>
        <CustomButton buttitle={Constants.LOGINBUTTONTEXT} />
        <Text style={styles.orText}> OR</Text>
        <CustomButton buttitle={Constants.LOGINWITHFACEBOOKBUTTONTEXT} />
        <View style={styles.registerView}>
          <Text style={styles.registerTextNormal}>Don't have an account?</Text>
          <TouchableOpacity onPress={null}>
            <Text style={styles.registerTextBold}>REGISTER</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
