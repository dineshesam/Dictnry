import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppProvider } from './context/AppContext';
import { Image } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import WordMeaningScreen from './screens/WordMeaningScreen';
import HistoryScreen from './screens/HistoryScreen';
import BookmarkScreen from './screens/BookmarkScreen';
import WordOfTheDayScreen from './screens/WordOfTheDayScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Stack for Home (to allow navigation to WordMeaningScreen)
const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="WordMeaning" component={WordMeaningScreen} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Tab.Navigator  initialRouteName="HomeTab"
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused }) => {
                    let iconSource;
        
                    if (route.name === 'HomeTab') {
                     iconSource = require('./assets/icons/home.png');
        
                    } else if (route.name === 'Word of the Day') {
                      iconSource = require('./assets/icons/gift.png');
                    }
                     else if (route.name === 'Bookmarks') {
                      iconSource = require('./assets/icons/bookmark.png');
                    }
                     else if (route.name === 'History') {
                      iconSource = require('./assets/icons/history.png');
                    }
        
                    return (
                      <Image
                        source={iconSource}
                        style={{
                          width: 24,
                          height: 24,
                          tintColor: focused ? 'black' : 'gray',
                        }}
                      />
                    );
                  },
                  tabBarActiveTintColor: 'black',
                  tabBarInactiveTintColor: 'gray',
                })}>
          <Tab.Screen name="HomeTab" component={HomeStack} options={{ headerShown: false  }} />
          <Tab.Screen name="Bookmarks" component={BookmarkScreen} />
          <Tab.Screen name="History" component={HistoryScreen} />
          <Tab.Screen name="Word of the Day" component={WordOfTheDayScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
