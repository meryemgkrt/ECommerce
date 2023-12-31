// In App.js in a new project

import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabNavigatior from './tabNavigators';
import {PRODUCTLIST} from '../utils/routes';
import ProductList from '../screens/productList';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={TAB} component={TabNavigatior} />
      <Stack.Screen name={PRODUCTLIST} component={ProductList} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
