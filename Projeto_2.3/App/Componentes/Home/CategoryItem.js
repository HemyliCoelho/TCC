
import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Colors from '../../Shared/Colors';

export default function CategoryItem({category}) {
  return (
    <View style={styles.iconEstilo}>
        <Image source={category.icon}
            style={styles.imagemEstilo}
        />
      <Text style={styles.textEstilo}>
        {category.name}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  iconEstilo:{
    padding:5,
    alignItems:'center',
    margin:5,
    width:95,
    height:95,
    justifyContent:'center',
    borderRadius:15,
    backgroundColor:Colors.PRIMARY
  },
  imagemEstilo: {
    width:40,
    height:40,
  },
  textEstilo:{
    fontSize:13
  },
});

