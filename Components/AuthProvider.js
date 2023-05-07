import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const SignUp = (email, password) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('User account created & signed in!');
        console.log(res);
        // setUser(user);
        // navigation.navigate('SignInScreen')

      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  const Login = (email, password) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('User account created & signed in!');
        console.log(res);
        setUser(res.user);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  const SignOut = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
        setUser(null)
      });
  };

  const authInfo = {
    SignUp,
    setUser,
    user,
    Login,
    SignOut
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
