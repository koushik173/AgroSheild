import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SplachScreen from './SplachScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

const RootStack = createNativeStackNavigator();

const RootStackScreen = ({navigator}) => {
  return (
    <RootStack.Navigator screenOptions={{
      headerShown: false
    }}>
        <RootStack.Screen name='SplachScreen' component={SplachScreen}/>
        <RootStack.Screen name='SignInScreen' component={SignInScreen}/>
        <RootStack.Screen name='SignUpScreen' component={SignUpScreen}/>
    </RootStack.Navigator>
  )
}

export default RootStackScreen