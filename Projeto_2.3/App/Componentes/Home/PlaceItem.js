import { View, Text, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../Shared/Colors";
import HorizontalLine from "./HorizontalLine";
export default function PlaceItem({ place }) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        margin:8
      }}
    >
    {place?.photos?  <Image
        source={{uri:
          "https://maps.googleapis.com/maps/api/place/photo" +
          "?maxwidth=400" +
          "&photo_reference=" +
          place?.photos[0]?.photo_reference +
          "&key=AIzaSyDPXiu-JoVuKSLEMxRC1LlHZMv-jeoLAQk",
        }}
        style={{ width: 110, height: 110, borderRadius: 10, marginLeft:10 }}
      />:
      <Image source={require('./../../../assets/placeholder.jpg')}
      style={{ width: 110, height: 110, borderRadius:10, marginLeft:10}}
      />}
      <View style={{flex:1}}>
        <Text
          numberOfLines={2}
          style={{ fontSize: 18, marginBottom: 5}}
        >
          {place.name}
        </Text>
        <Text style={{ fontSize: 16, 
        marginBottom: 5,
      color:Colors.DARK_GRAY }} 
        numberOfLines={2}>
          {place.vicinity}
        </Text>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            flexDirection: "row",
          }}
        >
          <AntDesign name="star" size={20} color={Colors.YELLOW} />
          <Text>{place.rating}</Text>
        </View>
      </View>
      <HorizontalLine/>
    </View>
  );
}