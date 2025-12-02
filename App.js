import React from 'react';
import { AppProvider } from './src/context/AppContext';
import AppNavigator from './src/navigation/AppNavigator';
import Toast, { BaseToast } from 'react-native-toast-message';
import './src/i18n/i18n';






const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: 'green',
        elevation: 5,
      }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 18, // Bigger title
        fontWeight: 'bold',
      }}
      text2Style={{
        fontSize: 16, // Bigger subtitle
      }}
    />
  ),
  info: (props) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: 'blue',
        elevation: 5,
      }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 18,
        fontWeight: 'bold',
      }}
      text2Style={{
        fontSize: 16,
      }}
    />
  ),
};

export default function App() {
  return (
    <AppProvider>
      <AppNavigator />
      <Toast config={toastConfig} />
    </AppProvider>
  );
}