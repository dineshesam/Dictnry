import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet ,TouchableOpacity,Alert} from 'react-native';
import { AppContext } from '../context/AppContext';
// import { styles } from '../Styles/styles';
import { getStyles } from '../Styles/styles';

const HistoryScreen = () => {
  const { history , clearHistory} = useContext(AppContext);
  const { theme, fontSize } = useContext(AppContext);
    
    const styles = getStyles(theme, fontSize);

  return (
    <View style={styles.container}>
      
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
      <Text style={styles.title}>Recent Searches :</Text>
      {history.length > 0 && (
  <TouchableOpacity   onPress={() => {
    Alert.alert(
      'Confirm',
      'Are you sure you want to clear the history?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: clearHistory,
        },
      ],
      { cancelable: true }
    );
  }} style={styles.deleteButton}>
    <Text style={styles.deleteText}>Clear History</Text>
  </TouchableOpacity>
)}
</View>
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

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20 },
//   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
//   item: { marginBottom: 15 },
//   word: { fontSize: 18, fontWeight: 'bold' },
//   definition: { fontSize: 16 }
// });

export default HistoryScreen;
