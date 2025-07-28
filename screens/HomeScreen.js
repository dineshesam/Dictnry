import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import dictionaryData from '../assets/dictionary.json';

const HomeScreen = ({ navigation }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = (text) => {
        setQuery(text);
        const entries = Object.entries(dictionaryData);
        const filtered = entries
            .filter(([word]) => word.toLowerCase().startsWith(text.toLowerCase()))
            .map(([word, definition]) => ({ word, definition }));
        setResults(filtered);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Search a word..."
                value={query}
                onChangeText={handleSearch}
            />
            <FlatList
                data={results}
                keyExtractor={(item) => item.word}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('WordMeaning', { word: item })}>
                        <Text style={styles.item}>{item.word}</Text>
                    </TouchableOpacity>
                )}
            />
            <View  style={{ flexDirection: 'row', justifyContent: 'center', marginLeft: 20, gap: 15 }}>
            <TouchableOpacity style={styles.Tbutton} onPress={() => navigation.navigate("History")}>
                <Text>History</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Tbutton} onPress={() => navigation.navigate("Bookmarks")}>
                <Text>Bookmarks</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Tbutton} onPress={() => navigation.navigate("Word of the Day")}>
                <Text>WoD</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    input: { borderWidth: 1, padding: 10, borderRadius: 8, marginBottom: 20 },
    item: { fontSize: 18, paddingVertical: 10 },
    Tbutton:{padding:5,backgroundColor: 'skyblue',borderRadius: 8,}
});

export default HomeScreen;
