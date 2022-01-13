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
import CustomButton from '../../common/components/Button';
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
        button_title={Constants.LOGINBUTTONTEXT.toUpperCase()}
        navigator={'null'}
        route="BottomTabNavigator"
        setState={null}
        isNavigation={true}
        height={'50px'}
        marginBottom={'13px'}
        width={'296px'}
        bgColor="#a94446"
        elevation={'0px'}
        fontSize={'16px'}
        marginVertical={'15px'}
        lineHeight={'20px'}
        letterSpacing={'-0.38px'}
        color="#fff"
        fontFamily="ProximaNova-Bold"
        icon={
          <Image
            source={require('../../common/assets/facebookicon.png')}
            style={{height: 20.2, width: 20.2}}
          />
        }
      />
      <Text style={styles.orText}> OR</Text>
      {/* <CustomButton1
        button_title={Constants.LOGINWITHFACEBOOKBUTTONTEXT}
        navigator="BottomTabNavigator"
        route="ProfileScreen"
        type="socialmedia"
        setState={null}
        isNavigation={true}
       
     /> */}
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
