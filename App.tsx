/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from "@react-navigation/native";
import { default as React } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import AppRoutes from "./App/src/Navigation";
import { STACKS } from "./App/src/Navigation/stacks";
import { persistor, store } from "./App/src/Store";

function App(): JSX.Element {
  return (
    <Provider store={store}>
      {/**
       * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
       * and saved to redux.
       * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
       * for example `loading={<SplashScreen />}`.
       * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
       */}
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AppRoutes stacks={STACKS} />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
