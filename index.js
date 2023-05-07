/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { AuthProvider } from './Components/AuthProvider';

const AppWrapper =()=>{
    return(
        <AuthProvider>
            <App />
        </AuthProvider>
    )
}

AppRegistry.registerComponent(appName, () => AppWrapper);
