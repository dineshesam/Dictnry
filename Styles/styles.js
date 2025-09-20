
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
  },
  word: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
    marginBottom: 6,
  },
  definition: {
    fontSize: 16,
    fontWeight: '400',
    color: '#444',
    lineHeight: 22,
    marginBottom: 10,
  },
  example: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#666',
    marginTop: 8,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DDD',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 44,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    color: '#333',
    fontSize: 16,
    paddingHorizontal: 10,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#333',
    marginHorizontal: 5,
  },
  item: {
    fontSize: 18,
    paddingVertical: 10,
    color: '#333',
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
  },
  button: {
    padding: 10,
    backgroundColor: 'black',
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
    backgroundColor: '#d0ebff',
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
    color: '#333',
  },
  actionBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  deleteButton: {
    backgroundColor: 'black',
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
