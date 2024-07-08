import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Pesquisa() {
 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pesquisar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  text: {
    fontSize: 20,
  },
});
