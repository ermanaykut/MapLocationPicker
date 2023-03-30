// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  AddAddressFromMap,
  AddAddressFromSearch,
  Home,
  MyAddresses,
} from './screens';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="AddAddressFromMap"
          component={AddAddressFromMap}
          options={{headerShown: true, title: 'Add Address From Map'}}
        />
        <Stack.Screen
          name="AddAddressFromSearch"
          component={AddAddressFromSearch}
          options={{headerShown: true, title: 'Add Address From Search'}}
        />
        <Stack.Screen
          name="MyAddresses"
          component={MyAddresses}
          options={{headerShown: true, title: 'My Addresses'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;