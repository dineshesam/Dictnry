import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { AppContext } from '../context/AppContext';
import Tts from 'react-native-tts';
import { getStyles } from '../Styles/styles';
import Toast from 'react-native-toast-message';




const WordMeaningScreen = ({ route }) => {
    const { word } = route.params;
    const { addToHistory, addToBookmarks, theme, fontSize, bookmarks, currentTheme } = useContext(AppContext);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const styles = getStyles(theme, fontSize);


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
            Tts.stop();
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
    const { colors } = currentTheme;


    return (
        <ScrollView style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginLeft: 20, gap: 15 }}>
                <Text style={styles.word}>{word.word}</Text>

                <TouchableOpacity onPress={speakWord} style={styles.iconButton}>
                    <Image
                        source={require('../assets/icons/speaker-filled-audio-tool.png')}
                        style={{
                            width: 24,
                            height: 24,
                            tintColor: colors.text

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
                        tintColor: colors.text

                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    // Check if word already exists in bookmarks
                    if (bookmarks.some(item => item.word === word.word)) {
                        Toast.show({
                            type: 'info',
                            text1: 'Already Added',
                            text2: `${word.word} is already in your bookmarks.`,
                            position: 'top',
                            topOffset: 120,
                        });
                    } else {
                        addToBookmarks(word);
                        Toast.show({
                            type: 'success',
                            text1: 'Added to Bookmarks',
                            text2: `${word.word} has been bookmarked successfully!`,
                            position: 'top',
                            topOffset: 120,
                        });
                    }
                }}
            >
                <Text style={styles.buttonText}>Bookmark</Text>
            </TouchableOpacity>

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
