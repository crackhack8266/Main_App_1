import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from './src/screens/Login';
import ProfileScreen from './src/screens/Profile';
import styles from './styles';
import SplashScreen from './src/screens/SplashScreen';
import OrderScreen from './src/screens/OrderNow';
import NutriDoc from './src/screens/NutriDoc';
import DashedLine from 'react-native-dashed-line';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
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
                  source={require('./src/common/assets/Home.png')}
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
                  source={require('./src/common/assets/Feed.png')}
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
                  source={require('./src/common/assets/SPA.png')}
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
                  source={require('./src/common/assets/BottomProfile.png')}
                  style={styles.bottomProfileIcon}
                />
                <View style={styles.bottomProfileView}></View>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
      {/*<Stack.Navigator
        initialRouteName="NutriDoc"
        //</NavigationContainer>screenOptions={{headerShown: false}}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OrderScreen"
          component={OrderScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NutriDoc"
          component={NutriDoc}
          options={{
            title: 'My Nutri Doc',
            headerTitleStyle: {
              fontFamily: 'Merriweather-Regular',
              elevation: 10,
            },
          }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
        </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default App;

{
  /* 


  
  const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator
    initialRouteName="NutriDoc"
      headerMode="none"
      screenOptions={{headerShown: false}}
      sceneAnimationEnabled={false}
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
         let iconName;
         if (route.name === 'Home') {
            iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused
            ? 'ios-list-box'
            : 'ios-list';
          }
    
     return <Ionicons name={iconName} size={size} color={color}     />;
       },
    })}
tabBarOptions={{
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
    }}
      >

     
      </Tab.Navigator>
    </NavigationContainer>
  )
}
*/
}
