import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import PlaceItem from './PlaceItem'
import PlaceItemBig from './PlaceItemBig'
export default function PlaceList({placeList}) {
  return (
    <View>
      <Text
      style={{fontSize:20
        ,margin:10}}
      >{placeList.length} Lugares Encontrados</Text>
 
      <FlatList
      data={placeList}
      renderItem={({item,index})=>(
        index == 0?
        <PlaceItemBig place={item}/>
        :<PlaceItem place={item}/>  
      )}
      />
    </View>
  )
}