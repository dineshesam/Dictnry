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
import SettingsScreen from './screens/SettingsScreen';
import HeaderTitle from './Components/HeaderTitle';
import BookmarkWordScreen from './screens/BookmarkWordScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Stack for Home (to allow navigation to WordMeaningScreen)
const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home"
      component={HomeScreen}
     
options={{
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTitle: () => <HeaderTitle />, // <-- Custom title
      headerTitleAlign: 'center',
      headerTintColor: '#FAFAFA',
    }}
/>
    <Stack.Screen name="Word Meaning"
      component={WordMeaningScreen}
      options={{
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTitleStyle: {
          fontSize: 24,
          fontWeight: '700',
          color: 'black',
        },
        headerTintColor: '#FAFAFA',
        headerTitleAlign: 'center',
      }} />
       <Stack.Screen name="settings"
      component={SettingsScreen}
      options={{
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTitleStyle: {
          fontSize: 24,
          fontWeight: '700',
          color: 'black',
        },
        headerTintColor: '#FAFAFA',
        headerTitleAlign: 'center',
      }} />
  </Stack.Navigator>
);
const BookStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Bookmarks"
      component={BookmarkScreen}
     
options={{
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTitle: 'Bookmarks',
      headerTitleStyle: {
          fontSize: 24,
          fontWeight: '700',
          color: 'black',
        },
      headerTitleAlign: 'center',
      headerTintColor: '#FAFAFA',
    }}
/>
    <Stack.Screen name="bmws"
      component={BookmarkWordScreen}
      options={{
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTitleStyle: {
          fontSize: 24,
          fontWeight: '700',
          color: 'black',
        },
        headerTintColor: '#FAFAFA',
        headerTitleAlign: 'center',
      }} />
       
  </Stack.Navigator>
);


const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIconStyle: { paddingBottom: 3 , marginBottom:4},
            tabBarIcon: ({ focused }) => {
              let iconSource;

              if (route.name === 'Home') {
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
                    width: 44,
                    height: 44,
                    tintColor: focused ? 'black' : 'gray',
                  }}
                />
              );
            },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
          <Tab.Screen name="Bookmarks" component={BookStack} options={{ headerShown: false }} />
          <Tab.Screen name="History"
            component={HistoryScreen}
            options={{
              headerStyle: {
                backgroundColor: '#fff',
              },
              headerTitleStyle: {
                fontSize: 24,
                fontWeight: '700',
                color: 'black',
              },
              headerTintColor: '#FAFAFA',
              headerTitleAlign: 'center',
            }} />
          <Tab.Screen name="Word of the Day"
            component={WordOfTheDayScreen}
            options={{
              headerStyle: {
                backgroundColor: '#fff',
              },
              headerTitleStyle: {
                fontSize: 24,
                fontWeight: '700',
                color: 'black',
              },
              headerTintColor: '#FAFAFA',
              headerTitleAlign: 'center',
            }} />
           
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
