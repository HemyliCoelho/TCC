import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';

export default function Fav() {
  const [favorites, setFavorites] = useState([]);
  const [newPlaceName, setNewPlaceName] = useState('');
  const [newPlaceDescription, setNewPlaceDescription] = useState('');
  const [newComment, setNewComment] = useState('');

  const addFavorite = () => {
    if (newPlaceName && newPlaceDescription) {
      const newFavorite = {
        id: Math.random().toString(),
        name: newPlaceName,
        description: newPlaceDescription,
        comment: newComment,
      };
      setFavorites([...favorites, newFavorite]);
      setNewPlaceName('');
      setNewPlaceDescription('');
      setNewComment('');
    }
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter(favorite => favorite.id !== id));
  };

  const addComment = (id, comment) => {
    const updatedFavorites = favorites.map(favorite => {
      if (favorite.id === id) {
        return { ...favorite, comment: comment };
      }
      return favorite;
    });
    setFavorites(updatedFavorites);
    setNewComment('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Locais Favoritos</Text>
      
      {/* Formulário para adicionar novos locais */}
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Local"
          value={newPlaceName}
          onChangeText={text => setNewPlaceName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Descrição do Local"
          value={newPlaceDescription}
          onChangeText={text => setNewPlaceDescription(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Adicionar comentário"
          value={newComment}
          onChangeText={text => setNewComment(text)}
        />
        <TouchableOpacity style={styles.roundedButton} onPress={addFavorite}>
          <Text style={styles.buttonText}>Adicionar Local Favorito</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de locais favoritos */}
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.favoriteItem}>
            <Text style={styles.favoriteText}>{item.name}</Text>
            <Text style={styles.favoriteDescription}>{item.description}</Text>
            {item.comment && <Text style={styles.favoriteComment}>{item.comment}</Text>}
     
            <TouchableOpacity style={styles.roundedButton} onPress={() => removeFavorite(item.id)}>
              <Text style={styles.buttonText}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={() => (
          <Text style={styles.message}>Nenhum local favorito encontrado.</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  formContainer: {
    marginBottom: 20,
  },
  favoriteItem: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 10,
  },
  favoriteText: {
    fontSize: 18,
  },
  favoriteDescription: {
    fontSize: 14,
    color: '#555',
  },
  favoriteComment: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#888',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  roundedButton: {
    backgroundColor: '#007bff',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});
