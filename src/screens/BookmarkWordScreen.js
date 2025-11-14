import React, { useContext, useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { AppContext } from '../context/AppContext';
import { getStyles } from '../Styles/styles';
import Tts from 'react-native-tts';

const BookmarkWordScreen = ({ route }) => {
  const { wordTitle } = route.params;
  const { bookmarks, theme, fontSize } = useContext(AppContext);
  const styles = getStyles(theme, fontSize);
  const [isSpeaking, setIsSpeaking] = useState(false)

  const wordData = bookmarks.find(item => item.word === wordTitle);

  useEffect(() => {
  Tts.addEventListener('tts-start', () => setIsSpeaking(true));
  Tts.addEventListener('tts-finish', () => setIsSpeaking(false));
  Tts.addEventListener('tts-cancel', () => setIsSpeaking(false));

  return () => {
    Tts.removeAllListeners('tts-start');
    Tts.removeAllListeners('tts-finish');
    Tts.removeAllListeners('tts-cancel');
    Tts.stop();
    
  };
}, []);
  
const speakDef = () => {
  if (isSpeaking) {
    Tts.stop();
  } else {
    Tts.speak(wordData.definition);
  }
};
  

  return (
    <ScrollView style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <Text style={styles.word}>{wordData.word}</Text>
        <TouchableOpacity onPress={() => Tts.speak(wordData.word)}>
          <Image
            source={require('../assets/icons/speaker-filled-audio-tool.png')}
            style={{ width: 24, height: 24, marginLeft: 10 }}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.definition}>{wordData.definition}</Text>
      <TouchableOpacity onPress={speakDef}>
        <Image
          source={require('../assets/icons/megaphone.png')}
          style={{ width: 24, height: 24, marginTop: 10 }}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default BookmarkWordScreen;
