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
import BookmarkWordScreen from './src/screens/WordScreen';
import WordScreen from './src/screens/WordScreen';
import Toast, { BaseToast } from 'react-native-toast-message';
import { useTranslation } from 'react-i18next';
import './src/i18n/i18n';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// ✅ Custom Toast Config
const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: 'green',
        elevation: 5,
        transform: [{ translateY: 0 }], // No slide
      }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 16,
        fontWeight: 'bold',
      }}
    />
  ),
};

// ✅ Home Stack with Translation
const HomeStack = () => {
  const { t: translate } = useTranslation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => <HeaderTitle title={translate('Home')} />,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen name="Word Meaning" component={WordMeaningScreen} options={{
          headerTitle: () => <HeaderTitle title={translate('Word Meaning')} />,
          headerTitleAlign: 'center',
        }} />
      <Stack.Screen name="settings" component={SettingsScreen}  options={{
          headerTitle: () => <HeaderTitle title={translate('settings')} />,
          headerTitleAlign: 'center',
        }} />
    </Stack.Navigator>
  );
};

// ✅ Bookmarks Stack with Translation
const BookStack = () => {
  const { t: translate } = useTranslation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Bookmarks"
        component={BookmarkScreen}
        options={{
          headerTitle: () => <HeaderTitle title={translate('bookmarks')} />,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="bmws"
        component={WordScreen}
        options={{
          headerTitle: () => <HeaderTitle title={translate('Word Meaning')} />,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};
const HistoryStack = () => {
  const { t: translate } = useTranslation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="History"
        component={HistoryScreen}
        options={{
          headerTitle: () => <HeaderTitle title={translate('history')} />,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="bmws"
        component={WordScreen}
        options={{
          headerTitle: () => <HeaderTitle title={translate('Word Meaning')} />,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};



// ✅ Main App Navigator with Translation
const AppNavigator = () => {
  const { currentTheme } = useContext(AppContext);
  const { t: translate } = useTranslation();

  return (
    <NavigationContainer theme={currentTheme}>
      <Tab.Navigator
  initialRouteName="Home"
  screenOptions={({ route }) => {
    const icons = {
      Home: require('./src/assets/icons/home.png'),
      "Word of the Day": require('./src/assets/icons/gift.png'),
      Bookmarks: require('./src/assets/icons/bookmark.png'),
      History: require('./src/assets/icons/history.png'),
    };

    return {
      headerShown: false,
      tabBarShowLabel: true,
      
tabBarActiveTintColor: currentTheme.colors.text, // or any color you want
      tabBarInactiveTintColor: '#8e8e8e',



      // ⭐ Bottom Tab Custom Style
      tabBarStyle: {
        position: 'absolute',
        bottom: 5,
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

      // ⭐ ICONS
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

        <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
        <Tab.Screen name="Bookmarks" component={BookStack} options={{ headerShown: false }} />
        <Tab.Screen name="History" component={HistoryStack} options={{ headerShown: false }} />
        <Tab.Screen
          name="Word of the Day"
          component={WordOfTheDayScreen}
          options={{
            headerTitle: () => <HeaderTitle title={translate('wordOfTheDay')} />,
            headerTitleAlign: 'center',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

// ✅ App Component
const App = () => (
  <AppProvider>
    <AppNavigator />
    <Toast config={toastConfig} />
  </AppProvider>
);

export default App;