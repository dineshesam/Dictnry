import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WordMeaningScreen = ({ route }) => {
  const { word } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.word}>{word.word}</Text>
      <Text style={styles.definition}>{word.definition}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  word: { fontSize: 24, fontWeight: 'bold' },
  definition: { fontSize: 18, marginTop: 10 }
});

export default WordMeaningScreen;
