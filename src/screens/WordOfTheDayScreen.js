
import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';
import { AppContext } from '../context/AppContext';
import { useTranslation } from 'react-i18next';
import CustomButton from '../Components/CustomButton';

const WordOfTheDayScreen = () => {
  const { dictionary, currentTheme } = useContext(AppContext);
  const { theme, fontSize} = useContext(AppContext);
  const { colors } = currentTheme;
  const styles = createStyles(colors);
  const { t } = useTranslation();
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
    <ScrollView style={[styles.container, { backgroundColor: colors.background}]}>
      <Text style={styles.title}>📅🎁🎉</Text>
      {wordOfTheDay && (
        <>
          <Text style={[styles.word,  {color: theme === 'dark' ? '#fff' : '#222', fontSize: Math.min(fontSize, 28)}]}>{wordOfTheDay.word}</Text>
          <Text style={[styles.definition,  {color: theme === 'dark' ? '#fff' : '#222',fontSize: Math.min(fontSize, 24)}]}>{wordOfTheDay.definition}</Text>
        </>
      )}
     <CustomButton
  label={`🔄 ${t('Refresh')}`}
  onPress={refreshWord}
  colors={currentTheme.colors}
  style={{ marginLeft:110 }}
  textStyle={{ color: currentTheme.colors.buttonText }}
  
/>
    </ScrollView>
  );
};

const createStyles= (colors) => StyleSheet.create({
  container: { flex: 1, padding: 20},
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10,marginLeft:150 },
  word: { fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 5,marginLeft:155 },
  definition: { fontSize: 16, color: '#555', textAlign: 'center', marginBottom: 20 },
  button: { padding: 10, backgroundColor: colors.card, borderRadius: 8,marginBottom:75,width:120,marginLeft:140},
  buttonText: { fontSize: 16, fontWeight: 'bold', color: colors.card },
});
// const createStyles = (colors) => StyleSheet.create({

export default WordOfTheDayScreen;
