import React, { useContext } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
// import Slider from '@react-native-community/slider';
import { AppContext } from '../context/AppContext';

const SettingsScreen = () => {
  const {
    theme, setTheme,
    fontSize, setFontSize,
    useOnline, setUseOnline,
  } = useContext(AppContext);

  return (
    <View style={[styles.container, { backgroundColor: theme === 'dark' ? '#222' : '#fff' }]}>
      {/* Theme Toggle */}
      <View style={styles.row}>
        <Text style={[styles.label, { color: theme === 'dark' ? '#fff' : '#222' }]}>Dark Theme</Text>
        <Switch
          value={theme === 'dark'}
          onValueChange={val => setTheme(val ? 'dark' : 'light')}
        />
      </View>

      {/* Font Size */}
      <View style={styles.row}>
        <Text style={[styles.label, { color: theme === 'dark' ? '#fff' : '#222' }]}>Font Size</Text>
        <View style={styles.fontRow}>
          <TouchableOpacity onPress={() => setFontSize(Math.max(12, fontSize - 2))} style={styles.fontButton}>
            <Text style={styles.fontButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={[styles.fontValue, { color: theme === 'dark' ? '#fff' : '#222' }]}>{fontSize}</Text>
          <TouchableOpacity onPress={() => setFontSize(Math.min(32, fontSize + 2))} style={styles.fontButton}>
            <Text style={styles.fontButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Online Search Toggle */}
      <View style={styles.row}>
        <Text style={[styles.label, { color: theme === 'dark' ? '#fff' : '#222' }]}>Enable Online Search</Text>
        <Switch
          value={useOnline}
          onValueChange={setUseOnline}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'flex-start' },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 20 },
  label: { fontSize: 18, fontWeight: '600' },
  fontRow: { flexDirection: 'row', alignItems: 'center' },
  fontButton: { backgroundColor: '#ccc', borderRadius: 5, padding: 8, marginHorizontal: 10 },
  fontButtonText: { fontSize: 20, fontWeight: 'bold' },
  fontValue: { fontSize: 18, minWidth: 40, textAlign: 'center' },
});

export default SettingsScreen;
