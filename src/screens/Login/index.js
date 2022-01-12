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
        setChangeText={setInputEmail}
        secureTextEntry={false}
        source={false}
        titletext={Constants.EMAILFIELDIDENTIFICATIONSTRING}
        circularField={true}
        keyboardType="default"
        value={null}
        styleprop={null}
      />
      <Input
        setChangeText={setInputPassword}
        secureTextEntry={true}
        source={true}
        titletext={Constants.PASSWORDFIELDIDENTIFICATIONSTRING}
        circularField={true}
        keyboardType="default"
        value={null}
        styleprop={null}
      />
      <TouchableOpacity onPress={null}>
        <Text style={styles.forgotPassText}>Forgot Password?</Text>
      </TouchableOpacity>
      <CustomButton
        button_title={Constants.LOGINBUTTONTEXT}
        navigator={'null'}
        route="BottomTabNavigator"
        type="primary"
        setState={null}
        isNavigation={true}
        viewstyleprop={{
          backgroundColor: '#a94446',
        }}
        textstyleprop={{
          color: '#fff',
          fontFamily: 'ProximaNova-Bold',
        }}
      />
      <Text style={styles.orText}> OR</Text>
      <CustomButton
        button_title={Constants.LOGINWITHFACEBOOKBUTTONTEXT}
        navigator="BottomTabNavigator"
        route="ProfileScreen"
        type="socialmedia"
        setState={null}
        isNavigation={true}
        viewstyleprop={{
          backgroundColor: '#fff',
          elevation: 3,
        }}
        textstyleprop={{
          color: '#232222',
          fontFamily: 'ProximaNova-Semibold',
        }}
      />
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
