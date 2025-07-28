
import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AppContext } from '../context/AppContext';

const WordOfTheDayScreen = () => {
  const { dictionary } = useContext(AppContext);
  const [wordOfTheDay, setWordOfTheDay] = useState(() => {
    const today = new Date();
    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    const index = seed % dictionary.length;
    return dictionary[index];
  });

  const refreshWord = () => {
    const index = Math.floor(Math.random() * dictionary.length);
    setWordOfTheDay(dictionary[index]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📅 Word of the Day</Text>
      {wordOfTheDay && (
        <>
          <Text style={styles.word}>{wordOfTheDay.word}</Text>
          <Text style={styles.definition}>{wordOfTheDay.definition}</Text>
        </>
      )}
      <TouchableOpacity style={styles.button} onPress={refreshWord}>
        <Text style={styles.buttonText}>🔄 Refresh</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  word: { fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 5 },
  definition: { fontSize: 16, color: '#555', textAlign: 'center', marginBottom: 20 },
  button: { padding: 10, backgroundColor: 'skyblue', borderRadius: 8 },
  buttonText: { fontSize: 16, fontWeight: 'bold' },
});

export default WordOfTheDayScreen;
