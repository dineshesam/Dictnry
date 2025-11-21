import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function AppNavigator() {
  const { currentTheme } = useContext(AppContext);

  return (
    <NavigationContainer theme={currentTheme}>
      <TabNavigator />
    </NavigationContainer>
  );
}