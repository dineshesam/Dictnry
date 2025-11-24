// src/components/OptionButton.js
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function OptionButton({ label, isActive, onPress }) {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        padding: 10,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 8,
        marginHorizontal: 5,
        backgroundColor: isActive ? colors.card : 'transparent',
      }}
    >
      <Text style={{ fontSize: 16, color: colors.text }}>{label}</Text>
    </TouchableOpacity>
  );
}