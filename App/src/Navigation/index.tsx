import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {IStacks} from '../Modals';

const Stack = createNativeStackNavigator();

interface IAppRoutes {
  stacks: IStacks[];
}

export default function AppRoutes({stacks}: IAppRoutes) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {stacks.map((ele: IStacks, ix: number) => (
        <Stack.Screen key={ix} name={ele.name} component={ele.component} />
      ))}
    </Stack.Navigator>
  );
}
