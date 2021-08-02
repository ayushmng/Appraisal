import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {MainNavigation} from './src/navigation/mainNavigation';
import {PersistGate} from 'redux-persist/integration/react';
import {storeObj, persistor} from './src/redux/store';

export default function App() {
  return (
    <>
      <Provider store={storeObj}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider>
            <MainNavigation />
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
