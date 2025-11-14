import React from 'react';

// import { AppProvider } from './AppContext';
import { AppProvider } from './context/AppContext';
import { Image } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import WordMeaningScreen from './screens/WordMeaningScreen';
import HistoryScreen from './screens/HistoryScreen';
import BookmarkScreen from './screens/BookmarkScreen';
import WordOfTheDayScreen from './screens/WordOfTheDayScreen';
import FavoriteIcon from './assets/icons/FavoriteIcon';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <AppProvider>
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconSource;

            if (route.name === 'Home') {
              return (
                <FavoriteIcon
                  width={24}
                  height={24}
                  fill={focused ? 'blue' : 'gray'}
                />
              );

            } else if (route.name === 'WoD') {
              iconSource = require('./assets/icons/Discover.png');
            }

            return (
              <Image
                source={iconSource}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? 'blue' : 'gray',
                }}
              />
            );
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="WoD" component={WordOfTheDayScreen} />
        <Tab.Screen name="BookMark" component={BookmarkScreen} />
        <Tab.Screen name="History" component={HistoryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    </AppProvider>
  );
};

export default App;
