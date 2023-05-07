import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import RootStackScreen from './Screens/RootStackScreen/RootStackScreen';
import auth from '@react-native-firebase/auth';
import { AuthContext } from './Components/AuthProvider';
import TopNavigatorScreen from './Screens/TopNavigatorScreen';
import SupportScreen from './Screens/SupportScreen';
import BookmarksScreen from './Screens/BookmarksScreen';
import SettingsScreen from './Screens/SettingsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContainer from './Screens/DrawerContainer/DrawerContainer';


const Drawer = createDrawerNavigator();

const App = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const {setUser,user} = useContext(AuthContext);

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  // if(user){
  //   console.log(user.email);
  // }
  return (
    <NavigationContainer>
      {user?(
          <Drawer.Navigator drawerContent={props=><DrawerContainer {...props}/>} screenOptions={{
            headerStyle: {backgroundColor: '#009387'},
            headerTintColor: '#fff'
          }}>
            <Drawer.Screen name="HomeDrawer" component={TopNavigatorScreen} />
            <Drawer.Screen name="SupportScreen" component={SupportScreen} />
            <Drawer.Screen name="BookmarksScreen" component={BookmarksScreen} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
          </Drawer.Navigator>
        )
        :
          <RootStackScreen />
        }
    </NavigationContainer>
  );
};

export default App;


      