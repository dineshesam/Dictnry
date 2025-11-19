import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { AppContext } from '../context/AppContext';
// import { styles } from '../Styles/styles';
import { getStyles } from '../Styles/styles';
import WordCard from '../Components/WordItem';
import { useTranslation } from 'react-i18next';
import ConfirmationDialog from '../Components/ConfirmationDialog'
import CustomButton from '../Components/CustomButton';



const HistoryScreen = ({navigation}) => {
  const { history, clearHistory, currentTheme } = useContext(AppContext);
  const { theme, fontSize } = useContext(AppContext);

  const styles = getStyles(theme, fontSize);
  const { t } = useTranslation();
  
const handleClearHistory = () => {
    ConfirmationDialog({
      title: t('confirm'),
      message: t('clearHistoryMessage') || 'Are you sure you want to clear the history?',
      onConfirm: clearHistory,
      onCancel: () => {}
    });
  };


  return (
    <View style={styles.container}>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={styles.title}>{t('recentSearches')} :</Text>
        {history.length > 0 && (
         

<CustomButton
  label={t('clearHistory')}
  onPress={handleClearHistory}
  colors={currentTheme.colors}
/>


        )}
      </View>

      <FlatList
        data={history}
        keyExtractor={(item) => item.word}
        renderItem={({ item }) => (
          <WordCard
            word={item.word}
            definition={item.definition}
            onPress={(word) => navigation.navigate('bmws', { wordTitle: word })}
            onLongPress={() => { }} // Not needed, but can leave empty
            isSelected={false} // Always false since no selection mode
          />


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
