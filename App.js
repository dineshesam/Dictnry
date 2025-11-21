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
        transform: [{ translateY: 0 }],
      }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 16,
        fontWeight: 'bold',
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