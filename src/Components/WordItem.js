import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

function WordCard({ word, definition, onPress, onLongPress, isSelected }) {
  const { colors } = useTheme();

  return (
    <Pressable
      onPress={() => onPress(word)}
      onLongPress={() => onLongPress(word)}
      style={{
        marginHorizontal: 16,
        marginVertical: 8,
        backgroundColor: isSelected ? colors.border : colors.card,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: colors.border,
        padding: 16
      }}
    >
      <Text style={{ fontWeight: '600', fontSize: 22, color: colors.text }} numberOfLines={1}>
        {word}
      </Text>
      {definition && (
        <Text style={{ marginTop: 6, color: colors.text, fontSize: 15 }} numberOfLines={2}>
          {definition}
        </Text>
      )}
    </Pressable>
  );
}

export default React.memo(WordCard);