/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, useColorScheme } from 'react-native';
import {
  SafeAreaProvider
} from 'react-native-safe-area-context';
import crashlytics from '@react-native-firebase/crashlytics';
import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BootSplash from "react-native-bootsplash";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {
  LoaderProvider,
  MusicPlayerProvider,
  SoundProvider,
} from './src/contextAPI';
import { NavigationHandler } from './src/navigationHandler';
import { persistor, store } from './src/redux/store';
import { colors } from './src/constants';

const App = () => {
  const [isPurged, setIsPurged] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    if (Platform.OS !== 'web') {
      BootSplash.hide({ fade: true });
    }
  }, []);

  // useEffect(() => {
  //   const persistorClear = persistStore(store);

  //   if (!isPurged) {
  //     persistorClear.purge();
  //     setIsPurged(true);
  //   }

  //   return () => {
  //     persistorClear.flush();
  //   };
  // }, [isPurged]);

  function initializeCrashlytics() {
    crashlytics().setCrashlyticsCollectionEnabled(true);
  }
  useEffect(() => {
    initializeCrashlytics();
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={colors.PURPLE.backgroundClr}/>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <MusicPlayerProvider>
              <LoaderProvider>
                <SoundProvider>
                  <NavigationHandler />
                </SoundProvider>
              </LoaderProvider>
            </MusicPlayerProvider>
          </PersistGate>
        </Provider>
      </GestureHandlerRootView>
    </SafeAreaProvider>

  );
};

export default App;
