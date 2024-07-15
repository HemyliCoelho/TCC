import React from 'react';
import { View, Dimensions } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

export default function Pesquisa({ placeList = [] }) {
 
  const initialRegion = {
    latitude: -31.3313, // Latitude de Bagé, RS
    longitude: -54.1109, // Longitude de Bagé, RS
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  console.log('placeList:', placeList); // Adicione este log para verificar os dados

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{
          width: Dimensions.get('screen').width,
          height: Dimensions.get('screen').height * 0.89,
        }}
        provider={PROVIDER_GOOGLE}
        initialRegion={initialRegion}
      >
        {placeList.map((item, index) => (
          <Marker
            key={index}
            title={item.name}
            description={item.description}
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude,
            }}
          />
        ))}
      </MapView>
    </View>
  );
}
