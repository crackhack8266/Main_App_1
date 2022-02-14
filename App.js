import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Login from 'screens/Login/index';
import SplashScreen from 'screens/SplashScreen';
import ProfileScreen from 'screens/Profile';
import OrderScreen from 'screens/OrderNow';
import NutriDoc from 'screens/NutriDoc';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Image} from 'react-native';
import styles from './styles';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StyledComponents from 'screens/TestScreens/StyledComponents';
import ActivityIndicatorScreen from 'screens/TestScreens/ActivityIndicator';
import PickerScreen from 'screens/TestScreens/PickerScreen';
import ModalScreen from 'screens/TestScreens/ModalScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
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
      <Tab.Screen
        name="ActivityIndicatorScreen"
        component={ActivityIndicatorScreen}
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
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ModalScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="StyledComponents"
          component={StyledComponents}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PickerScreen"
          component={PickerScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ModalScreen"
          component={ModalScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
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
