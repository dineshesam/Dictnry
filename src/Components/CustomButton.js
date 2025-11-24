import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ label, onPress, colors, style, textStyle }) => {
  const styles = getStyles(colors);

  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.text, textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

const getStyles = (colors) => StyleSheet.create({
  button: {

    width: 160,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: colors.buttonBg,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 1
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.buttonText
  }
});

export default CustomButton;
