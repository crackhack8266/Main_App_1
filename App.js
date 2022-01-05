import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './src/common/components/Navigation';

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
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
