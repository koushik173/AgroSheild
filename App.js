import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import HomeScreen from './Screens/HomeScreen';
import DetailsScreen from './Screens/DetailsScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TopNavigatorScreen from './Screens/TopNavigatorScreen';
import DrawerContainer from './Screens/DrawerContainer/DrawerContainer';
import SupportScreen from './Screens/SupportScreen';
import BookmarksScreen from './Screens/BookmarksScreen';
import SettingsScreen from './Screens/SettingsScreen';
import RootStackScreen from './Screens/RootStackScreen/RootStackScreen';


// const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
  
};

export default App;


      // <Drawer.Navigator drawerContent={props=><DrawerContainer {...props}/>} screenOptions={{
      //   headerStyle: {backgroundColor: '#009387'},
      //   headerTintColor: '#fff'
      // }}>
      //   <Drawer.Screen name="HomeDrawer" component={TopNavigatorScreen} />
      //   <Drawer.Screen name="SupportScreen" component={SupportScreen} />
      //   <Drawer.Screen name="BookmarksScreen" component={BookmarksScreen} />
      //   <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
      // </Drawer.Navigator>