/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppRoutes from './App/src/Navigation';
import {STACKS} from './App/src/Navigation/stacks';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <AppRoutes stacks={STACKS} />
    </NavigationContainer>
  );
}

export default App;
