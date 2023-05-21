/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './App/src/Navigation';
import { STACKS } from './App/src/Navigation/stacks';
import { PaperProvider } from 'react-native-paper';

function App(): JSX.Element {
  return (
    <PaperProvider>
      <NavigationContainer>
        <AppRoutes stacks={STACKS} />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
