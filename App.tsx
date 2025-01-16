import React, {useEffect, useState} from 'react';
import {Platform, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {LoaderProvider} from './src/contextAPI';
import {SoundProvider} from './src/contextAPI/soundsContext';
import {NavigationHandler} from './src/navigationHandler';
import {persistor, store} from './src/redux/store';
import {persistStore} from 'redux-persist';
import {MusicPlayerProvider} from './src/contextAPI/musicPlayerContext';
import crashlytics from '@react-native-firebase/crashlytics';

const App = () => {
  const [isPurged, setIsPurged] = useState(false);
  useEffect(() => {
    if (Platform.OS !== 'web') {
      SplashScreen.hide();
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
    <GestureHandlerRootView style={{flex: 1}}>
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
  );
};

export default App;
