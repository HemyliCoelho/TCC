import { View, Image, StyleSheet, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons'; 
import Colors from '../../Shared/Colors';

const Header = () => {
    const navigation = useNavigation();
  
    const handleImagePress = () => {
      navigation.navigate('Perfil'); // Altere para o nome da tela do perfil
    };
  
    return (
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        gap: 10,
        alignItems: 'center',
        marginTop: 10
      }}>
        <MaterialIcons name="place" size={40} color={Colors.NAVBAR} />
        <View>
          <TextInput placeholder='Search' style={styles.searchBar} />
        </View>
        <TouchableOpacity onPress={handleImagePress}>
          <Image source={require('./../../../assets/User.png')} style={styles.userImage} />
        </TouchableOpacity>
      </View>
    );
};

export default Header;

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: Colors.NAV,
    padding: 4,
    borderRadius: 50,
    paddingLeft: 10,
    width: Dimensions.get('screen').width * 0.6
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: Colors.NAV
  },
});
