
import React, { useContext, useState, useEffect, useRef } from 'react';
import { Animated, View, Text, TouchableOpacity } from 'react-native';
import { AppContext } from '../context/AppContext';
import { styles } from '../Styles/styles';

const WordOfTheDayFloating = () => {
    const { dictionary } = useContext(AppContext);
    const [wordOfTheDay, setWordOfTheDay] = useState(null);

    const translateX = useRef(new Animated.Value(-300)).current;
    const translateY = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (dictionary.length > 0) {
            const today = new Date();
            const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
            const index = seed % dictionary.length;
            setWordOfTheDay(dictionary[index]);
        }
    }, [dictionary]);

    useEffect(() => {
        Animated.loop(
            Animated.timing(translateX, {
                toValue: 300,
                duration: 10000,
                useNativeDriver: true,
            })
        ).start();

        Animated.loop(
            Animated.sequence([
                Animated.timing(translateY, {
                    toValue: -10,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(translateY, {
                    toValue: 10,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, []);

    const refreshWord = () => {
        if (dictionary.length > 0) {
            const index = Math.floor(Math.random() * dictionary.length);
            setWordOfTheDay(dictionary[index]);
        }
    };

    if (!wordOfTheDay) return null;

    return (
        <Animated.View style={[
            styles.card,
            {
                transform: [{ translateX }, { translateY }],
                position: 'absolute',
                top: 480,
                left: 0,
                zIndex: 10,
                width: '80%',
                alignSelf: 'center'
            }
        ]}>
            <Text style={{
                fontSize: 24,
                fontWeight: '700',
                color: '#fff',
                marginBottom: 10,
            }}>📅 Word of the Day</Text>
            <Text style={{
                fontSize: 20,
                fontWeight: '700',
                color: '#FFF',
                marginBottom: 6,
            }}>{wordOfTheDay.word}</Text>
            <Text style={{
                fontSize: 16,
                fontWeight: '400',
                color: '#fff',
                lineHeight: 22,
                marginBottom: 10,
            }}>{wordOfTheDay.definition}</Text>

        </Animated.View>
    );
};

export default WordOfTheDayFloating;
