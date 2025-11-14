import React, { useContext } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import { AppContext } from '../context/AppContext';

const SettingsScreen = () => {
  const {
    theme, setTheme,
    fontSize, setFontSize,
    useOnline, setUseOnline,
    currentTheme
  } = useContext(AppContext);

  const { colors } = currentTheme;
  const styles = createStyles(colors);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Theme Mode Selection */}
      <Text style={[styles.sectionTitle, { color: colors.text }]}>Theme</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.optionButton, theme === 'light' && { backgroundColor: colors.card , borderColor: colors.border}]}
          onPress={() => setTheme('light')}
        >
          <Text style={[styles.optionText, { color: colors.text }]}>Light</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.optionButton, theme === 'dark' && { backgroundColor: colors.card }]}
          onPress={() => setTheme('dark')}
        >
          <Text style={[styles.optionText, { color: colors.text }]}>Dark</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.optionButton, theme === 'system' && { backgroundColor: colors.card }]}
          onPress={() => setTheme('system')}
        >
          <Text style={[styles.optionText, { color: colors.text }]}>System</Text>
        </TouchableOpacity>
      </View>

      {/* Font Size */}
      <Text style={[styles.sectionTitle, { color: colors.text }]}>Font Size</Text>
      <View style={[styles.row, {backgroundColor:colors.card}]}>
        <TouchableOpacity onPress={() => setFontSize(Math.max(12, fontSize - 2))} style={styles.fontButton}>
          <Text style={styles.fontButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={[styles.fontValue, { color: colors.text }]}>{fontSize}</Text>
        <TouchableOpacity onPress={() => setFontSize(Math.min(32, fontSize + 2))} style={styles.fontButton}>
          <Text style={styles.fontButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Online Search Toggle */}
      <Text style={[styles.sectionTitle, { color: colors.text }]}>Enable Online Search</Text>
     <View style={[styles.row]}>
  <View style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}>
    <Switch
      value={useOnline}
      onValueChange={setUseOnline}
      trackColor={{ false: colors.border, true: colors.card }}
      thumbColor={useOnline ? colors.text : '#ccc'}
    />
  </View>
</View>
    </View>
  );
};

const createStyles= (colors) => StyleSheet.create({
  container: { flex: 1, padding: 24 },
  sectionTitle: { fontSize: 18, fontWeight: '600', marginBottom: 10 },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 20 },
  optionButton: { padding: 10, borderWidth: 1, borderColor: colors.border, borderRadius: 8, marginHorizontal: 5 },
  optionText: { fontSize: 16 },
  fontButton: { backgroundColor: '#ccc', borderRadius: 5, padding: 8, marginHorizontal: 10 },
  fontButtonText: { fontSize: 20, fontWeight: 'bold' },
  fontValue: { fontSize: 18, minWidth: 40, textAlign: 'center' },
});

export default SettingsScreen;