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

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SignUpScreenr</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#f5dc02'
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50
  },
  footer:{
    flex:3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  text_header: {
    color: '#fff',
    fontWeight:'bold',
    fontSize: 30
  },
  text_footer:{
    color: '#05375a',
    fontSize: 18
  },
  action:{
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
  },
  textInput:{
    flex: 1,
    paddingLeft: 10,
    color: '#05375a'
  },
  button: {
    alignItems: 'center',
    marginTop: 50
  },
  signIn:{
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:'10'
  },
  textSign:{
    fontSize: 18,
    fontWeight: 'bold'
}
})



export default SignUpScreen