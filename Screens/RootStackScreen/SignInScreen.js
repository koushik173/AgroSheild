import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import React, {useContext, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button} from 'react-native-paper';
import { AuthContext } from '../../Components/AuthProvider';

const SignInScreen = ({navigation}) => {

  const {Login} = useContext(AuthContext); 
  const [data, setData] = useState({
    email: '',
    passward: '',
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const handleLogin=(userData)=>{
    Login(userData.email, userData.passward);
  }

  const textInputChange = val => {
    if (val.length != 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = val => {
    setData({
      ...data,
      passward: val,
    });
  };
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome to AgroSheild!</Text>
        <Text style={styles.text_header}>Sign in</Text>

      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig"> 
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <MaterialCommunityIcons
            name="account-outline"
            color="#05375a"
            size={20}
          />

          <TextInput
            placeholder="Your Email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => textInputChange(val)}
          />

          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <MaterialCommunityIcons
                name="check-circle-outline"
                color="green"
                size={20}
              />
            </Animatable.View>
          ) : null}
        </View>

        <Text style={[styles.text_footer, {marginTop: 35}]}>Password</Text>
        <View style={styles.action}>
          <MaterialCommunityIcons
            name="account-outline"
            color="#05375a"
            size={20}
          />
          <TextInput
            placeholder="Your Password"
            style={styles.textInput}
            secureTextEntry={data.secureTextEntry ? true : false}
            autoCapitalize="none"
            onChangeText={val => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <MaterialCommunityIcons
                name="eye-off-outline"
                color="grey"
                size={20}
              />
            ) : (
              <MaterialCommunityIcons
                name="eye-outline"
                color="grey"
                size={20}
              />
            )}
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={()=>handleLogin(data)}>
            <LinearGradient
              colors={['#08d4cd', '#01ab9d']}
              style={{
                width: '100%',
                height: 50,
                borderRadius: 10,
                marginTop: 20,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: 'white',
                  fontSize: 25,
                  marginTop: 7,
                }}>
                Login
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <View style={{flexDirection: 'row', marginTop: 10, gap: 5}}>
            <Text style={{fontSize: 15}}>New To AgroSheild? </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignUpScreen')}>
              <Text style={{color: 'green', fontSize: 15}}>
                Create New Account!
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            <View>
              <Text style={{width: 50, textAlign: 'center'}}>OR</Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
          </View>

          <Animatable.View animation="lightSpeedIn" style={{
              flexDirection: 'row',
              gap: 10,
              justifyContent: 'space-around',
              marginTop: 10,
            }}>
            <TouchableOpacity>
              <MaterialCommunityIcons name="google" color="black" size={35} />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons name="facebook" color="black" size={35} />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons name="linkedin" color="black" size={35} />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons name="github" color="black" size={35} />
            </TouchableOpacity>

          </Animatable.View>
        </View>
      
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  text_header: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
    marginTop: -15,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
    backgroundColor: 'yellow',
  },
  signnIn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10',
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignInScreen;
