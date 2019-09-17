/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import StoreVideo from './src/pages/StoreVideo';
import StoreList from './src/pages/StoreList';
import Act from './src/pages/Act';
import Task from './src/pages/Task';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => StoreVideo);
// AppRegistry.registerComponent(appName, () => StoreList);
// AppRegistry.registerComponent(appName, () => Act);
// AppRegistry.registerComponent(appName, () => Task);
