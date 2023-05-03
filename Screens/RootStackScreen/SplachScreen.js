import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SplachScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation="fadeIn"
          source={require('../../Assets/Capture.png')}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.title}>Stay Connected With US!</Text>
        <Text style={styles.text}>Sign in with account</Text>

        <View style={{marginTop: 15}}>
          <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
            <LinearGradient
              colors={['#08d4cd', '#01ab9d']}
              style={styles.signIn}>
              <MaterialCommunityIcons
                name="chevron-right-circle"
                color="#fff"
                size={30}
              />
              <Text style={styles.textSign}>Get Started</Text>
              <MaterialCommunityIcons
                name="chevron-double-right"
                color="#fff"
                size={20}
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

const {height} = Dimensions.get('screen');
const height_logo = height * 0.56;

const styles = StyleSheet.create({
  linearGradient: {
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    backgroundColor: '#f5dc02',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#FF8B02',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingVertical: 50,
    paddingHorizontal: 50,
  },
  logo: {
    width: height_logo,
    height: height_logo,
    marginTop: 20,
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 10,
  },
  signIn: {
    width: 250,
    height: 40,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 15,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SplachScreen;
