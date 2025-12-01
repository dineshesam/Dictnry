import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import WordMeaningScreen from '../screens/WordMeaningScreen';
import BookmarkScreen from '../screens/BookmarkScreen';
import HistoryScreen from '../screens/HistoryScreen';
import WordOfTheDayScreen from '../screens/WordOfTheDayScreen';
import SettingsScreen from '../screens/SettingsScreen';
import WordScreen from '../screens/WordScreen';
import HeaderTitle from '../Components/HeaderTitle';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// ✅ Home Stack
const HomeStack = () => {
  const { t } = useTranslation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => <HeaderTitle title={t('Home')} />,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Word Meaning"
        component={WordMeaningScreen}
        options={{
          headerTitle: () => <HeaderTitle title={t('wordMeaning')} />,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="settings"
        component={SettingsScreen}
        options={{
          headerTitle: () => <HeaderTitle title={t('settings')} />,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

// ✅ Bookmark Stack
const BookmarkStack = () => {
  const { t } = useTranslation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Bookmarks"
        component={BookmarkScreen}
        options={{
          headerTitle: () => <HeaderTitle title={t('bookmarks')} />,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="bmws"
        component={WordScreen}
        options={{
          headerTitle: () => <HeaderTitle title={t('wordMeaning')} />,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

// ✅ History Stack
const HistoryStack = () => {
  const { t } = useTranslation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="History"
        component={HistoryScreen}
        options={{
          headerTitle: () => <HeaderTitle title={t('history')} />,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="bmws"
        component={WordScreen}
        options={{
          headerTitle: () => <HeaderTitle title={t('wordMeaning')} />,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

// ✅ Tab Navigator
export default function TabNavigator() {
  const { currentTheme } = useContext(AppContext);
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => {
        const icons = {
          Home: require('../assets/icons/home.png'),
          'Word of the Day': require('../assets/icons/gift.png'),
          Bookmarks: require('../assets/icons/bookmark.png'),
          History: require('../assets/icons/history.png'),
        };

        return {
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: currentTheme.colors.text,
          tabBarInactiveTintColor: '#8e8e8e',
          tabBarStyle: {
            position: 'absolute',
            bottom: 2,
            left: 20,
            right: 20,
            height: 70,
            borderRadius: 20,
            backgroundColor: currentTheme.colors.tabBg,
            borderTopWidth: 0,
            elevation: 5,
            shadowColor: '#000',
            shadowOpacity: 0.15,
            shadowRadius: 8,
          },
          tabBarIcon: ({ focused }) => {
            const iconSource = icons[route.name];
            return (
              <Image
                source={iconSource}
                resizeMode="contain"
                style={{
                  width: 32,
                  height: 32,
                  tintColor: focused ? currentTheme.colors.text : '#8e8e8e',
                  opacity: focused ? 1 : 0.7,
                }}
              />
            );
          },
        };
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Bookmarks" component={BookmarkStack} />
      <Tab.Screen name="History" component={HistoryStack} />
      <Tab.Screen
        name="Word of the Day"
        component={WordOfTheDayScreen}
        options={{
          headerTitle: () => <HeaderTitle title={t('wordOfTheDay')} />,
          headerTitleAlign: 'center',
          headerShown: true,
        }}
      />
    </Tab.Navigator>
  );
}