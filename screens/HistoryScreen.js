import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { AppContext } from '../context/AppContext';

const HistoryScreen = () => {
  const { history } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search History</Text>
      <FlatList
        data={history}
        keyExtractor={(item) => item.word}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.word}>{item.word}</Text>
            <Text style={styles.definition}>{item.definition}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  item: { marginBottom: 15 },
  word: { fontSize: 18, fontWeight: 'bold' },
  definition: { fontSize: 16 }
});

export default HistoryScreen;
