/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Navigation from './src/navigations/navigation';

AppRegistry.registerComponent(appName, () => Navigation);
