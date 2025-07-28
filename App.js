import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  FlatList,
  View,
  StyleSheet
} from 'react-native';
import dictionary from './assets/dictionary.json';

const App = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (text) => {
    setQuery(text);
    const entries = Object.entries(dictionary);
    const filtered = entries
      .filter(([word]) => word.toLowerCase().startsWith(text.toLowerCase()))
      .map(([word, definition]) => ({ word, definition }));
    setResults(filtered);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Offline Dictionary</Text>
      <TextInput
        style={styles.input}
        placeholder="Search a word..."
        value={query}
        onChangeText={handleSearch}
      />
      <FlatList
        data={results}
        keyExtractor={(item) => item.word}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.word}>{item.word}</Text>
            <Text style={styles.definition}>{item.definition}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20
  },
  item: { marginBottom: 15 },
  word: { fontSize: 18, fontWeight: 'bold' },
  definition: { fontSize: 16 }
});

export default App;
