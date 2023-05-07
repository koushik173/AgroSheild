import {View, StyleSheet} from 'react-native';
import React, { useContext, useState } from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../../Components/AuthProvider';

const DrawerContainer = props => {
    const {SignOut} = useContext(AuthContext);
    // const SignOut =(data)=>{
    //   console.log(data);
    // }
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme=()=>{
        setIsDarkTheme(!isDarkTheme)
    };
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View>
          <View style={style.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{uri: 'https://i.ibb.co/XStCsnJ/sheldon-Cooper.jpg'}}
                size={50}
              />
              <View style={{marginLeft: 15}}>
                <Title
                  style={{fontSize: 16, fontWeight: 'bold', lineHeight: 22}}>
                  Koushik Roy
                </Title>
                <Caption style={{fontSize: 14, lineHeight: 14}}>
                  @heyitskoushik
                </Caption>
              </View>
            </View>
            <View style={style.row}>
              <View style={style.section}>
                <Paragraph style={style.paragraph}>80</Paragraph>
                <Caption>Followers</Caption>
              </View>
              <View style={style.section}>
                <Paragraph style={style.paragraph}>100</Paragraph>
                <Caption>Following</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={style.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {props.navigation.navigate('Home')}}></DrawerItem>

            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="Profile"
              onPress={() => {props.navigation.navigate('Profile')}}></DrawerItem>

            <DrawerItem
              icon={({color, size}) => (
                <Icon name="bookmark-outline" color={color} size={size} />
              )}
              label="Bookmarks"
              onPress={() => {props.navigation.navigate('BookmarksScreen')}}></DrawerItem>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="cog" color={color} size={size} />
              )}
              label="Settings"
              onPress={() => {props.navigation.navigate('SettingsScreen')}}></DrawerItem>
              <DrawerItem
              icon={({color, size}) => (
                <Icon name="help-circle-outline" color={color} size={size} />
              )}
              label="Support"
              onPress={() => {props.navigation.navigate('SupportScreen')}}></DrawerItem>
          </Drawer.Section>

          <Drawer.Section title='Preferences'>
            <TouchableRipple onPress={()=>{toggleTheme()}}>
                <View style={style.preference}>
                    <Text style={{fontWeight:'bold'}}>Dark Theme</Text>
                    <View pointerEvents='none'>
                        <Switch value={isDarkTheme}/>
                    </View>
                </View>
            </TouchableRipple>

          </Drawer.Section>

        </View>
      </DrawerContentScrollView>

      <Drawer.Section style={style.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() =>SignOut()}>
          </DrawerItem>
      </Drawer.Section>
    </View>
  );
};

const style = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 26,
  },
});

export default DrawerContainer;
