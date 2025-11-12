import React, { useState, useContext } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet, ImageBackground, Image, ActivityIndicator } from 'react-native';
import axios from 'axios';
import dictionaryData from '../assets/dictionary.json';
import { AppContext } from '../context/AppContext';

const HomeScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const { theme, fontSize, useOnline } = useContext(AppContext);

  // Fetch suggestions from Datamuse API
  const fetchSuggestions = async (text) => {
    if (!text.length) {
      setSuggestions([]);
      return;
    }
    setLoading(true);
    try {
      const response = await axios.get(`https://api.datamuse.com/sug?s=${text}`);
      setSuggestions(response.data.slice(0, 5));
    } catch (error) {
      setSuggestions([]);
    }
    setLoading(false);
  };

  // Fetch meaning from dictionaryapi.dev
  const fetchMeaning = async (word) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      if (Array.isArray(response.data)) {
        const entry = response.data[0];
        const definition = entry.meanings?.[0]?.definitions?.[0]?.definition || 'No definition found.';
        navigation.navigate('Word Meaning', { word: { word, definition } });
      } else {
        navigation.navigate('Word Meaning', { word: { word, definition: 'No definition found.' } });
      }
    } catch (error) {
      navigation.navigate('Word Meaning', { word: { word, definition: 'No definition found.' } });
    }
    setLoading(false);
  };

  // For offline search
  const handleOfflineSelect = (word) => {
    const definition = dictionaryData[word] || 'No definition found.';
    navigation.navigate('Word Meaning', { word: { word, definition } });
  };

  // Handle input change
  const handleChange = (text) => {
    setQuery(text);
    if (useOnline) {
      fetchSuggestions(text);
    } else {
      // Offline suggestions from local JSON
      const entries = Object.entries(dictionaryData);
      const filtered = entries
        .filter(([word]) => word.toLowerCase().startsWith(text.toLowerCase()))
        .slice(0, 5)
        .map(([word]) => ({ word }));
      setSuggestions(filtered);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme === 'dark' ? '#222' : '#fff' }]}>
      

      <ImageBackground
        style={styles.backgroundImage}
        resizeMode="cover"
        source={require("../assets/dictnarynobg.png")}
      >
        <View style={[styles.searchBar, { backgroundColor: theme === 'dark' ? '#444' : 'grey' }]}>
          <Image
            source={require('../assets/icons/search.png')}
            style={[styles.icon, { tintColor: '#fff' }]}
          />
          <TextInput
            style={[styles.input, { color: '#fff', fontSize: Math.min(fontSize, 24) }]}
            placeholder="Search a Word...!"
            placeholderTextColor={theme === 'dark' ? '#bbb' : '#eee'}
            value={query}
            onChangeText={handleChange}
          />
          {query.length > 0 && (
            <TouchableOpacity onPress={() => { setQuery(''); setSuggestions([]); }}>
              <Image
                source={require('../assets/icons/close.png')}
                style={[styles.icon, { tintColor: '#fff' }]}
              />
            </TouchableOpacity>
          )}
        </View>
        {loading ? (
          <ActivityIndicator size="large" color={theme === 'dark' ? '#fff' : '#000'} style={{ marginTop: 20 , marginLeft: 80 }} />
        ) : (
          <FlatList
            data={suggestions}
            keyExtractor={(item, index) => `${item.word}-${index}`}
            contentContainerStyle={{
              paddingHorizontal: 20,
              backgroundColor: theme === 'dark' ? 'rgba(30,30,30,0.7)' : 'rgba(0,0,0,0.3)',
              borderRadius: 8,
              marginLeft: 40,
            }}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  if (useOnline) {
                    fetchMeaning(item.word);
                  } else {
                    handleOfflineSelect(item.word);
                  }
                }}
              >
                <Text style={{ fontSize, color: '#fff', paddingVertical: 10 }}>
                  {item.word}
                </Text>
              </TouchableOpacity>
            )}
          />
        )}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
   
    alignItems: "flex-start",
    padding: 0
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 44,
    marginBottom: 20,
    marginTop: 10,
    margin: 10
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 10,
  },
});

export default HomeScreen;
