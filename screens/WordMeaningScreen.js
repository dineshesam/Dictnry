import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { AppContext } from '../context/AppContext';
import Tts from 'react-native-tts';
import { styles } from '../Styles/styles';


const WordMeaningScreen = ({ route }) => {
    const { word } = route.params;
    const { addToHistory, addToBookmarks } = useContext(AppContext);
    const [isSpeaking, setIsSpeaking] = useState(false);

    useEffect(() => {
        addToHistory(word);
    }, []);

    const speakWord = () => {
        Tts.speak(word.word);
    };

useEffect(() => {
  Tts.addEventListener('tts-start', () => setIsSpeaking(true));
  Tts.addEventListener('tts-finish', () => setIsSpeaking(false));
  Tts.addEventListener('tts-cancel', () => setIsSpeaking(false));

  return () => {
    Tts.removeAllListeners('tts-start');
    Tts.removeAllListeners('tts-finish');
    Tts.removeAllListeners('tts-cancel');
  };
}, []);

const speakDef = () => {
  if (isSpeaking) {
    Tts.stop();
  } else {
    Tts.speak(word.definition);
  }
};


    //  const speakDef = () => {
    //     Tts.speak(word.definition);
    // };


    return (
        <ScrollView style={styles.container}>
            <View  style={{ flexDirection: 'row', justifyContent: 'center', marginLeft: 20, gap: 15 }}>
            <Text style={styles.word}>{word.word}</Text>

            <TouchableOpacity onPress={speakWord} style={styles.iconButton}>
                <Image
                    source={require('../assets/icons/speaker-filled-audio-tool.png')}
                    style={{
                        width: 24,
                        height: 24,

                    }}
                />
            </TouchableOpacity>
            </View>

            <Text style={styles.definition}>{word.definition}</Text>
             <TouchableOpacity onPress={speakDef} style={styles.iconButton}>
                <Image
                    source={require('../assets/icons/megaphone.png')}
                    style={{
                        width: 24,
                        height: 24,
                        marginLeft: 180,

                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => addToBookmarks(word)} ><Text
            style={styles.buttonText}>Bookmark</Text></TouchableOpacity>
                
        </ScrollView>
    );
};

// const styles = StyleSheet.create({
//     container: { flex: 1, padding: 20,paddingBottom:150 },
//     word: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
//     definition: { fontSize: 18, marginBottom: 20 },
//     iconButton: { padding: 8 },
//     buttonText: { fontSize: 16, fontWeight: 'bold' },
//     button: { padding: 10, backgroundColor: 'skyblue', borderRadius: 8,width:105,alignContent:'center',marginLeft:120 },
// });

export default WordMeaningScreen;
