import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { AppContext } from '../context/AppContext';
import { getStyles } from '../Styles/styles';
import Toast from 'react-native-toast-message';
import WordCard from '../Components/WordItem';
import { useTranslation } from 'react-i18next';
import CustomButton from '../Components/CustomButton';


const BookmarkScreen = ({ navigation }) => {
  const { bookmarks, removeBookmark, currentTheme } = useContext(AppContext);
  const [selectedWords, setSelectedWords] = useState([]);
  const [selectionMode, setSelectionMode] = useState(false);
  const { t } = useTranslation();

  const { theme, fontSize } = useContext(AppContext);
  // const styles = getStyles(theme);
  const { colors } = currentTheme;
  const styles = getStyles(theme, fontSize, colors);


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
          <CustomButton
            label={t('deleteSelected')}
            onPress={() => {
              handleDeleteSelected();
              Toast.show({
                type: 'success',
                text1: 'Deleted Successfully',
                text2: `${selectedWords.length} items removed.`,
                position: 'top',
                topOffset: 120,
              });
            }}
            colors={currentTheme.colors}

          />

          <CustomButton
            label={t('cancel')}
            onPress={cancelSelection}
            colors={currentTheme.colors}
          // or '#ff6600' for orange
          />
        </View>
      )}

      <FlatList
        data={bookmarks}
        keyExtractor={(item) => item.word}
        renderItem={({ item }) => (
          <WordCard
            word={item.word}
            definition={item.definition}
            isSelected={selectedWords.includes(item.word)}
            onPress={(word) => {
              if (selectionMode) {
                toggleSelection(word);
              } else {
                navigation.navigate('bmws', { wordTitle: word });
              }
            }}
            onLongPress={(word) => {
              setSelectionMode(true);
              toggleSelection(word); // Select the long-pressed item immediately
            }}
          />
        )}
      />
    </View>
  );
};


export default BookmarkScreen;
