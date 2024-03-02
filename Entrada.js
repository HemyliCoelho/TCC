import * as React from "react";
import { View, Image, Button, StyleSheet } from "react-native";

const App = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("./DestinoTrans.png")}
        style={styles.DestinoTraçado}
      />
      <Button title="Entrar" onPress={() => navigation.navigate("Inicio")} />
      <Button
        title="Cadastro"
        onPress={() => navigation.navigate("Cadastro")}
      />
    </View>
  );
};
