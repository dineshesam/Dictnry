import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme } from 'react-native';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
// import dictionaryData from '../assets/dictionary.json';
import dictionaryData from '../utils/dictionary.json';
import { CustomLightTheme, CustomDarkTheme } from '../Styles/colors'

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Dictionary, history, bookmarks
  const [history, setHistory] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [dictionary, setDictionary] = useState([]);
  const [wordOfTheDay, setWordOfTheDay] = useState(null);

  // Settings
  const [theme, setTheme] = useState('light'); // 'light', 'dark', or 'system'
  const [fontSize, setFontSize] = useState(16);
  const [useOnline, setUseOnline] = useState(false);

  // Load data and settings from AsyncStorage
  useEffect(() => {
    const loadData = async () => {
      const storedHistory = await AsyncStorage.getItem('history');
      const storedBookmarks = await AsyncStorage.getItem('bookmarks');
      const storedTheme = await AsyncStorage.getItem('theme');
      const storedFontSize = await AsyncStorage.getItem('fontSize');
      const storedUseOnline = await AsyncStorage.getItem('useOnline');

      if (storedHistory) setHistory(JSON.parse(storedHistory));
      if (storedBookmarks) setBookmarks(JSON.parse(storedBookmarks));
      if (storedTheme) setTheme(storedTheme);
      if (storedFontSize) setFontSize(Number(storedFontSize));
      if (storedUseOnline) setUseOnline(storedUseOnline === 'true');

      setDictionary(
        Object.entries(dictionaryData).map(([word, definition]) => ({ word, definition }))
      );
    };
    loadData();
  }, []);

  // Persist settings
  useEffect(() => {
    AsyncStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    AsyncStorage.setItem('fontSize', fontSize.toString());
  }, [fontSize]);

  useEffect(() => {
    AsyncStorage.setItem('useOnline', useOnline.toString());
  }, [useOnline]);

  // Word of the Day logic
  useEffect(() => {
    if (dictionary.length > 0) {
      const today = new Date();
      const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
      const index = seed % dictionary.length;
      setWordOfTheDay(dictionary[index]);
    }
  }, [dictionary]);

  // History/bookmark logic
  const addToHistory = async (word) => {
    const updated = [word, ...history.filter(w => w.word !== word.word)];
    setHistory(updated);
    await AsyncStorage.setItem('history', JSON.stringify(updated));
  };

  const clearHistory = async () => {
    setHistory([]);
    await AsyncStorage.removeItem('history');
  };

  const addToBookmarks = async (word) => {
    const updated = [word, ...bookmarks.filter(w => w.word !== word.word)];
    setBookmarks(updated);
    await AsyncStorage.setItem('bookmarks', JSON.stringify(updated));
  };

  // const removeBookmark = async (wordToRemove) => {
  //   const updated = bookmarks.filter(item => item.word !== wordToRemove);
  //   setBookmarks(updated);
  //   await AsyncStorage.setItem('bookmarks', JSON.stringify(updated));
  // };
  const removeBookmark = (wordToRemove) => {
    setBookmarks((prev) => prev.filter((item) => item.word !== wordToRemove));
  };
  // ✅ Theme integration
  const systemTheme = useColorScheme(); // 'light' or 'dark'
  const activeTheme = theme === 'system' ? systemTheme : theme;

  // const CustomLightTheme = {
  //   ...DefaultTheme,
  //   colors: {
  //     ...DefaultTheme.colors,
  //     background: '#FFFFFF',
  //     text: '#111111',
  //     card: '#ebebf4ff',
  //     border: '#E6E6E6',
  //     tint: '#49575aff',
  //     tabBg:'#d7e2e8ff',
  //     buttonBg:'black' ,
  //     buttonText: '#FFFFFF' // Off-white / book page color

  //   },
  // };

  // const CustomDarkTheme = {
  //   ...DarkTheme,
  //   colors: {
  //     ...DarkTheme.colors,
  //     background: '#000000',
  //     text: '#FFFFFF',
  //     card: '#4a4a4eff',
  //     border: '#333333',
  //     tint: '#c2c6c7ff',
  //      tabBg:'#111111',
  //       buttonBg:'#444',
  //        buttonText: '#FFFFFF'
  //   },
  // };

  const currentTheme = activeTheme === 'dark' ? CustomDarkTheme : CustomLightTheme;

  return (
    <AppContext.Provider
      value={{
        history, bookmarks, addToHistory, addToBookmarks, dictionary, wordOfTheDay,
        removeBookmark, clearHistory,
        theme, setTheme,
        fontSize, setFontSize,
        useOnline, setUseOnline,
        currentTheme // ✅ Added for NavigationContainer
      }}
    >
      {children}
    </AppContext.Provider>
  );
};