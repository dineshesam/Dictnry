import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { AppContext } from '../context/AppContext';
import { styles } from '../Styles/styles';

const BookmarkScreen = () => {
  const { bookmarks, removeBookmark } = useContext(AppContext);
  const [selectedWords, setSelectedWords] = useState([]);
  const [selectionMode, setSelectionMode] = useState(false);

  const toggleSelection = (word) => {
    if (selectedWords.includes(word)) {
      setSelectedWords(selectedWords.filter((w) => w !== word));
    } else {
      setSelectedWords([...selectedWords, word]);
    }
  };

  const handleDeleteSelected = () => {
    selectedWords.forEach((word) => removeBookmark(word));
    setSelectedWords([]);
    setSelectionMode(false);
  };

  const cancelSelection = () => {
    setSelectedWords([]);
    setSelectionMode(false);
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Bookmarked Words</Text> */}

      {selectionMode && (
        <View style={styles.actionBar}>
          <TouchableOpacity onPress={handleDeleteSelected} style={styles.deleteButton}>
            <Text style={styles.deleteText}>Delete Selected</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={cancelSelection} style={styles.cancelButton}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      )}

      <FlatList
        data={bookmarks}
        keyExtractor={(item) => item.word}
        renderItem={({ item }) => (
          <TouchableOpacity
            onLongPress={() => setSelectionMode(true)}
            onPress={() => {
              if (selectionMode) toggleSelection(item.word);
            }}
            style={[
              styles.item,
              selectedWords.includes(item.word) && styles.selectedItem,
            ]}
          >
            <View style={styles.wordRow}>
              <Text style={styles.word}>{item.word}</Text>
              {selectionMode && (
                <Text style={styles.checkbox}>
                  {selectedWords.includes(item.word) ? '☑' : '☐'}
                </Text>
              )}
            </View>
            <Text style={styles.definition}>{item.definition}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20 },
//   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
//   item: {
//     marginBottom: 15,
//     padding: 10,
//     borderRadius: 8,
//     backgroundColor: 'skyblue',
//   },
//   selectedItem: {
//     backgroundColor: '#d0ebff',
//   },
//   wordRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   word: { fontSize: 18, fontWeight: 'bold' },
//   definition: { fontSize: 16, marginTop: 4 },
//   checkbox: { fontSize: 18, color: '#333' },
//   actionBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   deleteButton: {
//     backgroundColor: 'red',
//     padding: 10,
//     borderRadius: 5,
//   },
//   deleteText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   cancelButton: {
//     backgroundColor: '#aaa',
//     padding: 10,
//     borderRadius: 5,
//   },
//   cancelText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });

export default BookmarkScreen;
