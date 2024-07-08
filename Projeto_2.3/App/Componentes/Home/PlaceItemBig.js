import { View, Text, Image } from "react-native";
import React from "react";
import Colors from "../../Shared/Colors";
import { AntDesign } from "@expo/vector-icons";
import HorizontalLine from "./HorizontalLine";

export default function PlaceItemBig({ place }) {
  return (
    <View style={{marginTop:5, padding:5}}>
     <Image
        source={{uri:
          "https://maps.googleapis.com/maps/api/place/photo" +
          "?maxwidth=400" +
          "&photo_reference=" +
          place?.photos[0]?.photo_reference +
          "&key=AIzaSyDPXiu-JoVuKSLEMxRC1LlHZMv-jeoLAQk",
        }}
        style={{ width: "92%", height: 190, borderRadius: 15, margin:15}}
      />
      <Text
        numberOfLines={2}
        style={{ fontSize: 18, marginBottom: 2, marginLeft:15}} 
      >
        {place.name}
      </Text>
      <Text
        style={{ fontSize: 16, marginBottom: 5, color: Colors.DARK_GRAY, marginLeft:15 }}
        numberOfLines={2}
      >
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
          <AntDesign name="star" size={20} color={Colors.YELLOW} style={{marginLeft:15}}/>
          <Text>{place.rating}</Text>
        </View>
          <HorizontalLine/>
    </View>
  );
}