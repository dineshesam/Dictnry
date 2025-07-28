import React from 'react';

// import { AppProvider } from './AppContext';
import { AppProvider } from './context/AppContext';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import WordMeaningScreen from './screens/WordMeaningScreen';
import HistoryScreen from './screens/HistoryScreen';
import BookmarkScreen from './screens/BookmarkScreen';
import WordOfTheDayScreen from './screens/WordOfTheDayScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <AppProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="WordMeaning" component={WordMeaningScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
        <Stack.Screen name="Bookmarks" component={BookmarkScreen} />
        <Stack.Screen name="Word of the Day" component={WordOfTheDayScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </AppProvider>
  );
};

export default App;
