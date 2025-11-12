
import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';
import { AppContext } from '../context/AppContext';

const WordOfTheDayScreen = () => {
  const { dictionary } = useContext(AppContext);
  const { theme, fontSize} = useContext(AppContext);
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
    <ScrollView style={[styles.container, { backgroundColor: theme === 'dark' ? '#222' : '#fff' }]}>
      <Text style={styles.title}>📅🎁🎉</Text>
      {wordOfTheDay && (
        <>
          <Text style={[styles.word,  {color: theme === 'dark' ? '#fff' : '#222', fontSize: Math.min(fontSize, 28)}]}>{wordOfTheDay.word}</Text>
          <Text style={[styles.definition,  {color: theme === 'dark' ? '#fff' : '#222',fontSize: Math.min(fontSize, 24)}]}>{wordOfTheDay.definition}</Text>
        </>
      )}
      <TouchableOpacity style={[styles.button,{backgroundColor: theme === 'dark' ? '#444' : 'black'}]} onPress={refreshWord}>
        <Text style={[styles.buttonText , {color: theme === 'dark' ? '#fff' : '#222'}]}>🔄 Refresh</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20},
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10,marginLeft:150 },
  word: { fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 5,marginLeft:120 },
  definition: { fontSize: 16, color: '#555', textAlign: 'center', marginBottom: 20 },
  button: { padding: 10, backgroundColor: 'black', borderRadius: 8,marginBottom:75,width:120,marginLeft:140},
  buttonText: { fontSize: 16, fontWeight: 'bold', color:"#fff" },
});

export default WordOfTheDayScreen;
