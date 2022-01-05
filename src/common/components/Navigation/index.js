import React from 'react';
import {View, Image} from 'react-native';
import Login from '../../../screens/Login';
import ProfileScreen from '../../../screens/Profile';
import styles from './styles';
import SplashScreen from '../../../screens/SplashScreen';
import OrderScreen from '../../../screens/OrderNow';
import NutriDoc from '../../../screens/NutriDoc';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={SplashScreen}
      screenOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'grey',
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="OrderScreen"
        component={OrderScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={styles.commonView}>
              <Image
                source={require('../../assets/Home.png')}
                style={styles.homeIcon}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={styles.commonView}>
              <Image
                source={require('../../assets/Feed.png')}
                style={styles.feedIcon}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="NutriDoc"
        component={NutriDoc}
        options={{
          headerShown: true,
          tabBarIcon: ({focused}) => (
            <View style={styles.commonView}>
              <Image
                source={require('../../assets/SPA.png')}
                style={styles.spaIcon}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={styles.commonView}>
              <Image
                source={require('../../assets/BottomProfile.png')}
                style={styles.bottomProfileIcon}
              />
              <View style={styles.bottomProfileView}></View>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
