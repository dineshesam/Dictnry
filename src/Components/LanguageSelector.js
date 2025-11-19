import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import OptionButton from './OptionButton';
import i18n from 'i18next';

const LanguageSelector = ({ languages, onSelect, colors }) => {
  const styles = getStyles(colors);

const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
  <OptionButton
    label="English"
    isActive={i18n.language === 'en'}
    onPress={() => changeLanguage('en')}
  />
  <OptionButton
    label="हिन्दी"
    isActive={i18n.language === 'hi'}
    onPress={() => changeLanguage('hi')}
  />
  <OptionButton
    label="తెలుగు"
    isActive={i18n.language === 'te'}
    onPress={() => changeLanguage('te')}
  />
</View>

  );
};

const getStyles = (colors) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    marginHorizontal: 5,
    backgroundColor: colors.card
  },
  text: {
    fontSize: 16,
    color: colors.text,
    fontWeight: '500'
  }
});

export default LanguageSelector;