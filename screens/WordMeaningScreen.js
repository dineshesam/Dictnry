import React, { useContext, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AppContext } from '../context/AppContext';

const WordMeaningScreen = ({ route }) => {
  const { word } = route.params;
  const { addToHistory, addToBookmarks } = useContext(AppContext);

  useEffect(() => {
    addToHistory(word);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.word}>{word.word}</Text>
      <Text style={styles.definition}>{word.definition}</Text>
      <Button title="Bookmark" onPress={() => addToBookmarks(word)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  word: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
  definition: { fontSize: 18, marginBottom: 20 }
});

export default WordMeaningScreen;
