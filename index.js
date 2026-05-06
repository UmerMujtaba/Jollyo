/**
 * @format
 */

import { AppRegistry } from 'react-native';
import mobileAds from 'react-native-google-mobile-ads';
import App from './App';
import { name as appName } from './app.json';

mobileAds()
  .initialize()
  .then(adapterStatuses => {
    console.log('Mobile Ads SDK Initialized');
  });

AppRegistry.registerComponent(appName, () => App);
