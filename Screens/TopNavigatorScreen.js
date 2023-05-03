import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ProfileScreen from './ProfileScreen';
import ExploreScreen from './ExploreScreen';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

const Tab = createMaterialBottomTabNavigator();

const TopNavigatorScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="black"
      barStyle={{backgroundColor: '#009387'}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
            title: 'Profile',
          tabBarLabel: 'Profile',
          tabBarColor: '#009387',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          tabBarLabel: 'Details',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TopNavigatorScreen;
