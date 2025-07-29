import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import dictionaryData from '../assets/dictionary.json';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [history, setHistory] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [dictionary, setDictionary] = useState([]);
  const [wordOfTheDay, setWordOfTheDay] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const storedHistory = await AsyncStorage.getItem('history');
      const storedBookmarks = await AsyncStorage.getItem('bookmarks');
      if (storedHistory) setHistory(JSON.parse(storedHistory));
      if (storedBookmarks) setBookmarks(JSON.parse(storedBookmarks));
      setDictionary(Object.entries(dictionaryData).map(([word, definition]) => ({ word, definition })));
    };

    loadData();
  }, []);

  useEffect(() => {
    if (dictionary.length > 0) {
      const today = new Date();
      const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
      const index = seed % dictionary.length;
      setWordOfTheDay(dictionary[index]);
    }
  }, [dictionary]);

  const addToHistory = async (word) => {
    const updated = [word, ...history.filter(w => w.word !== word.word)];
    setHistory(updated);
    await AsyncStorage.setItem('history', JSON.stringify(updated));
  };

  const addToBookmarks = async (word) => {
    const updated = [word, ...bookmarks.filter(w => w.word !== word.word)];
    setBookmarks(updated);
    await AsyncStorage.setItem('bookmarks', JSON.stringify(updated));
  };
  

  const removeBookmark = (wordToRemove) => {
    setBookmarks((prev) => prev.filter((item) => item.word !== wordToRemove));
  };


  return (
    <AppContext.Provider value={{ history, bookmarks, addToHistory, addToBookmarks, dictionary, wordOfTheDay ,removeBookmark }}>
      {children}
    </AppContext.Provider>
  );
};
