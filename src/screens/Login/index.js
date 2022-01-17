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
import {Input} from 'components/InputField';
import CustomButton from 'components/Button';
import Constants from 'constants';

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
        buttonTitle={Constants.LOGINBUTTONTEXT.toUpperCase()}
        navigator={'null'}
        route="BottomTabNavigator"
        setState={null}
        isNavigation={true}
        icon={null}
      />
      <Text style={styles.orText}> OR</Text>

      <CustomButton
        buttonTitle={Constants.LOGINWITHFACEBOOKBUTTONTEXT.toUpperCase()}
        navigator="null"
        route="null"
        setState={null}
        isNavigation={true}
        bgColor="#ffffff"
        elevation={3}
        color="#232222"
        fontFamily="ProximaNova-Semibold"
        icon={
          <Image
            source={require('../../common/assets/facebookicon.png')}
            style={{height: 20.2, width: 20.2, marginHorizontal: 13}}
          />
        }
        left={true}
      />

      <View style={styles.registerView}>
        <Text style={styles.registerTextNormal}>Don't have an account?</Text>
        <TouchableOpacity>
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
    <View style={styles.parentContainer}>
      <StatusBar barStyle="light-content" backgroundColor={'#4e4e4e'} />
      <View style={{height: screenHeight + 85}}>
        {renderLoginHeader()}
        {renderLoginBody(setInputEmail, setInputPassword)}
      </View>
    </View>
  );
};

export default Login;
