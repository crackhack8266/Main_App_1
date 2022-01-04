import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/screens/Login';
import ProfileScreen from './src/screens/Profile';
import SplashScreen from './src/screens/SplashScreen';
import OrderScreen from './src/screens/OrderNow';
import NutriDoc from './src/screens/NutriDoc';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
