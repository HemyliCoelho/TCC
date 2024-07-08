// CategoryList.js
import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { FlatList } from 'react-native';
import CategoryItem from './CategoryItem';

export default function CategoryList({ onCategorySelect }) {
  const categoryList = [
    {
      id: 1,
      name: 'Geral',
      value: 'geral',
      icon: require('./../../../assets/geral.png')
    },
    {
      id: 2,
      name: 'FastFood',
      value: 'restaurant',
      icon: require('./../../../assets/food.png')
    },
    {
      id: 3,
      name: 'Mercado',
      value: 'supermarket',
      icon: require('./../../../assets/mercado.png')
    },
    {
      id: 4,
      name: 'Cafézinhos',
      value: 'cafe',
      icon: require('./../../../assets/cafe.png')
     },
     {
      id: 5,
      name: 'Gasolina',
      value: 'gas_station',
      icon: require('./../../../assets/gas.png'),
     },

  ];

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
    onCategorySelect(category);
  };

  return (
    <View style={{ marginTop: 15 }}>
      <Text style={{ fontSize: 20 }}>Selecione a Categoria</Text>
      <FlatList
        data={categoryList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 5 }}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCategoryPress(item)}>
            <CategoryItem category={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
