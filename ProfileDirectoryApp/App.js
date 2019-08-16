import React from 'react';
import { Provider } from 'react-redux';

// Redux State Management
import {store, persistor } from './src/store/Store';
import { PersistGate } from 'redux-persist/integration/react';
// React Native Navigator
import AppContainer from './src/navigation/AppContainer';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={persistor}
        >
          <AppContainer />
        </PersistGate>
      </Provider>
    );
  };
};