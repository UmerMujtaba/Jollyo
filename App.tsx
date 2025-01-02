import React, {useEffect, useState} from 'react';
import {Platform} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {LoaderProvider} from './src/contextAPI';
import {SoundProvider} from './src/contextAPI/soundsContext';
import {NavigationHandler} from './src/navigationHandler';
import {persistor, store} from './src/redux/store';

import {persistStore} from 'redux-persist';

const App = () => {
  const [isPurged, setIsPurged] = useState(false);
  useEffect(() => {
    if (Platform.OS !== 'web') {
      SplashScreen.hide();
    }
  }, []);

  // useEffect(() => {
  //   if (Platform.OS !== 'web') {
  //     SplashScreen.hide();
  //   }

  //   const persistorClear = persistStore(store);

  //   if (!isPurged) {
  //     persistorClear.purge();
  //     setIsPurged(true);
  //   }

  //   return () => {
  //     persistorClear.flush();
  //   };
  // }, [isPurged]);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <LoaderProvider>
            <SoundProvider>
              <NavigationHandler />
            </SoundProvider>
          </LoaderProvider>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
