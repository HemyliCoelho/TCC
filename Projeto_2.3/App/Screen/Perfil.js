import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Perfil() {
 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Perfil</Text>
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
