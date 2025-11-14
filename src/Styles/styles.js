import { StyleSheet } from 'react-native';

export const getStyles = (theme = 'light', fontSize = 16) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme === 'dark' ? '#222' : '#F5F5F5',
    padding: 20,
  },
  title: {
    fontSize: Math.min(fontSize + 8, 24),
    fontWeight: '700',
    color: theme === 'dark' ? '#fff' : '#333',
    marginBottom: 10,
  },
  word: {
    fontSize: fontSize+4,
    fontWeight: '700',
    color: theme === 'dark' ? '#fff' : '#222',
    marginBottom: 6,
  },
  definition: {

  fontSize: fontSize,
  fontWeight: '400',
  color: theme === 'dark' ? '#ccc' : '#444',
  lineHeight: Math.max(fontSize * 1.6, 24),
  marginBottom: 10,
  flexWrap: 'wrap',

  },
  example: {
    fontSize: 14,
    fontStyle: 'italic',
    color: theme === 'dark' ? '#aaa' : '#666',
    marginTop: 8,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme === 'dark' ? '#444' : '#DDD',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 44,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    color: theme === 'dark' ? '#fff' : '#333',
    fontSize: 16,
    paddingHorizontal: 10,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: theme === 'dark' ? '#fff' : '#333',
    marginHorizontal: 5,
  },
  item: {
    fontSize: 18,
    paddingVertical: 10,
    color: theme === 'dark' ? '#fff' : '#333',
  },
  card: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    backgroundColor: theme === 'dark' ? '#333' : '#fff',
  },
  button: {
    padding: 10,
    backgroundColor: theme === 'dark' ? '#444' : 'black',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'center',
    minWidth: 120,
    marginBottom: 25
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  selectedItem: {
    backgroundColor: theme === 'dark' ? '#2b7aaf' : '#d0ebff',
    borderRadius:10,
    marginTop:10,
    padding:10
  },
  wordRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkbox: {
    fontSize: 18,
    color: theme === 'dark' ? '#fff' : '#333',
  },
  actionBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  deleteButton: {
    backgroundColor: theme === 'dark' ? '#444' : 'black',
    padding: 10,
    borderRadius: 10,
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#aaa',
    padding: 10,
    borderRadius: 5,
  },
  cancelText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
