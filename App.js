import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppProvider, AppContext } from './src/context/AppContext';
import { Image } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import WordMeaningScreen from './src/screens/WordMeaningScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import BookmarkScreen from './src/screens/BookmarkScreen';
import WordOfTheDayScreen from './src/screens/WordOfTheDayScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import HeaderTitle from './src/Components/HeaderTitle';
import BookmarkWordScreen from './src/screens/BookmarkWordScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerTitle: () => <HeaderTitle />, headerTitleAlign: 'center' }} />
    <Stack.Screen name="Word Meaning" component={WordMeaningScreen} options={{ headerTitleAlign: 'center' }} />
    <Stack.Screen name="settings" component={SettingsScreen} options={{ headerTitleAlign: 'center' }} />
  </Stack.Navigator>
);

const BookStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Bookmarks" component={BookmarkScreen} options={{ headerTitle: 'Bookmarks', headerTitleAlign: 'center' }} />
    <Stack.Screen name="bmws" component={BookmarkWordScreen} options={{ headerTitle: 'Word Meaning',headerTitleAlign: 'center' }} />
  </Stack.Navigator>
);

// ✅ This component is inside AppProvider, so context works
const AppNavigator = () => {
  const { currentTheme } = useContext(AppContext);

  return (
    <NavigationContainer theme={currentTheme}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIconStyle: { paddingBottom: 3, marginBottom: 4 },
          tabBarIcon: ({ focused }) => {
            let iconSource;
            if (route.name === 'Home') iconSource = require('./src/assets/icons/home.png');
            else if (route.name === 'Word of the Day') iconSource = require('./src/assets/icons/gift.png');
            else if (route.name === 'Bookmarks') iconSource = require('./src/assets/icons/bookmark.png');
            else if (route.name === 'History') iconSource = require('./src/assets/icons/history.png');

            return (
              <Image
                source={iconSource}
                style={{
                  width: 44,
                  height: 44,
                  tintColor: focused ? currentTheme.colors.text : 'gray',
                }}
              />
            );
          },
          tabBarActiveTintColor: currentTheme.colors.text,
          tabBarInactiveTintColor: 'gray',
          headerStyle: { backgroundColor: currentTheme.colors.card },
          headerTitleStyle: { fontSize: 24, fontWeight: '700', color: currentTheme.colors.text },
          headerTintColor: currentTheme.colors.text,
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
        <Tab.Screen name="Bookmarks" component={BookStack} options={{ headerShown: false }} />
        <Tab.Screen name="History" component={HistoryScreen} />
        <Tab.Screen name="Word of the Day" component={WordOfTheDayScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const App = () => (
  <AppProvider>
    <AppNavigator />
  </AppProvider>
);

export default App;