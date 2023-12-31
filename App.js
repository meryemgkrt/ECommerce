//import liraries
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/routers/tabNavigators';
import {Provider} from 'react-redux';
import store from './src/store';

// create a component

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
