import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import dictionaryData from '../assets/dictionary.json';

const HomeScreen = ({ navigation }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = (text) => {
        setQuery(text);
        const entries = Object.entries(dictionaryData);
        const filtered = entries
            .filter(([word]) => word.toLowerCase().startsWith(text.toLowerCase()))
            .slice(0, 10)
            .map(([word, definition]) => ({ word, definition }));
        setResults(filtered);
    };

    return (
        <View style={styles.container}>


            <ImageBackground
                style={styles.backgroundImage}
                resizeMode="cover"
                source={require("../assets/bg.jpg")}
            >
                <View style={styles.searchBar}>
                    <Image
                        source={require('../assets/icons/search.png')}
                        style={styles.icon}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Search a word..."
                        value={query}
                        onChangeText={handleSearch}
                    />

                    {query.length > 0 && (
                        <TouchableOpacity onPress={() => {
                            setQuery('');
                            setResults([]); // Optional: clear results
                        }}>
                            <Image
                                source={require('../assets/icons/close.png')}
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                    )}

                </View>
                <FlatList
                    data={results}
                    keyExtractor={(item) => item.word}
                    contentContainerStyle={{ paddingHorizontal: 20 ,backgroundColor: 'rgba(0, 0, 0, 0.2)',borderRadius:8}} 
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('WordMeaning', { word: item })}>
                            <Text style={styles.item}>{item.word}</Text>
                        </TouchableOpacity>
                    )}
                />
            </ImageBackground>
            {/* <View style={{ flexDirection: 'row', justifyContent: 'center', marginLeft: 20, gap: 15 }}>
                <TouchableOpacity style={styles.Tbutton} onPress={() => navigation.navigate("History")}>
                    <Text>History</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Tbutton} onPress={() => navigation.navigate("Bookmarks")}>
                    <Text>Bookmarks</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Tbutton} onPress={() => navigation.navigate("Word of the Day")}>
                    <Text>WoD</Text>
                </TouchableOpacity>
            </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    // input: { borderWidth: 1, padding: 10, borderRadius: 8, marginBottom: 20, backgroundColor: 'grey' },
    item: { fontSize: 18, paddingVertical: 10, color: 'white' },
    Tbutton: { padding: 5, backgroundColor: 'skyblue', borderRadius: 8, },
    backgroundImage: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems:"flex-start",
        padding:0
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'grey', // solid red background
        borderRadius: 8,
        paddingHorizontal: 10,
        height: 44,
        marginBottom: 20,
    },

    icon: {
        width: 24,
        height: 24,
        tintColor: 'white', // black icons
        marginHorizontal: 5,
    },

    input: {
        flex: 1,
        color: 'white', // text color
        fontSize: 16,
        paddingHorizontal: 10,
    },

});

export default HomeScreen;
