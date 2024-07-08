import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text } from 'react-native'; // Importe Text do react-native
import Header from '../Componentes/Home/Header';
import GoogleMapView from '../Componentes/Home/GoogleMapView';
import CategoryList from '../Componentes/Home/CategoryList';
import PlaceList from '../Componentes/Home/PlaceList';
import GlobalApi from '../Services/GlobalApi';
import Colors from '../Shared/Colors';

export default function Home() {
  const [placeList, setPlaceList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    if (selectedCategory) {
      getNearBySearchPlace(selectedCategory.value);
    }
  }, [selectedCategory]);

  const getNearBySearchPlace = (category) => {
    GlobalApi.nearByPlace(category).then(resp => {
      console.log(resp.data.results);
      setPlaceList(resp.data.results);
    }).catch(error => {
      console.error("Erro ao buscar locais próximos:", error);
    });
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filterPlacesByCategory = (places, categoryValue) => {
    if (!categoryValue) {
      return places;
    }
    return places.filter(place => place.type === categoryValue);
  };

  const filteredPlaces = filterPlacesByCategory(placeList, selectedCategory ? selectedCategory.value : null);
 
  return (
    <>
      <ScrollView style={{ flex: 1 }}>
      <View style={{ padding: 20}}>
        <Header />
        <GoogleMapView  placeList={placeList}/>
        <CategoryList onCategorySelect={handleCategorySelect} />
      </View>
      <View>
        {placeList && <PlaceList placeList={placeList} />}
      </View>
      </ScrollView>
    </>
  );
}
