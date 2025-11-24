import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const FontSizeAdjuster = ({ fontSize, onIncrease, onDecrease, min = 12, max = 32, colors }) => {
  const styles = getStyles(colors); // ✅ Ensure styles are generated

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onDecrease(Math.max(min, fontSize - 2))} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.value}>{fontSize}</Text>
      <TouchableOpacity onPress={() => onIncrease(Math.min(max, fontSize + 2))} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const getStyles = (colors) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 130,
    backgroundColor: colors.card,
    borderRadius: 20
  },
  button: {
    backgroundColor: colors.border,
    borderRadius: 5,
    padding: 8
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text
  },
  value: {
    fontSize: 18,
    minWidth: 40,
    textAlign: 'center',
    color: colors.text
  }
});

export default FontSizeAdjuster;