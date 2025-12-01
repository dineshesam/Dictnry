import React, { useContext, useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { AppContext } from '../context/AppContext';
import { getStyles } from '../Styles/styles';
import Tts from 'react-native-tts';
import useDynamicStyles from '../hooks/useDynamicStyles';

const WordScreen = ({ route }) => {
  const { wordTitle } = route.params;
  const { word, definition } = route.params;
  const { bookmarks, theme, fontSize, history, currentTheme } = useContext(AppContext);
  const styles = getStyles(theme, fontSize);
  const [isSpeaking, setIsSpeaking] = useState(false)
  // const { colors } = currentTheme;
   const { colors, textStyles } = useDynamicStyles();


  const wordData = bookmarks.find(item => item.word === wordTitle)
    || history.find(item => item.word === wordTitle);



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
        <Text style={textStyles.word}>{wordData.word}</Text>
        <TouchableOpacity onPress={() => Tts.speak(wordData.word)}>
          <Image
            source={require('../assets/icons/speaker-filled-audio-tool.png')}
            style={{ width: 24, height: 24, marginLeft: 10, tintColor: colors.text }}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.definition}>{wordData.definition}</Text>
      <TouchableOpacity onPress={speakDef}>
        <Image
          source={require('../assets/icons/megaphone.png')}
          style={{ width: 24, height: 24, marginTop: 10, marginLeft: 180, tintColor: colors.text }}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default WordScreen;
