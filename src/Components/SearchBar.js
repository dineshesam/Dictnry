// components/SearchBar.js
import React from 'react';
import { View, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const SearchBar = ({
  value,
  onChangeText,
  onClear,
  placeholder,
  iconColor,
  backgroundColor = '#fff',
  textColor = '#000',
  fontSize = 16,
}) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Image
        source={require('../assets/icons/search.png')}
        style={[styles.icon, { tintColor: iconColor }]}
      />
      <TextInput
        style={[styles.input, { color: textColor, fontSize }]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#888"
      />
      {value.length > 0 && (
        <TouchableOpacity onPress={onClear}>
          <Image
            source={require('../assets/icons/close.png')}
            style={[styles.icon, { tintColor: iconColor }]}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 44,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 5,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default SearchBar;