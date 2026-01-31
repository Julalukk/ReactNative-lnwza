import React from "react";
import MapView, { Marker } from "react-native-maps";
import { FontAwesome } from "@expo/vector-icons";

export default function PeopleMarkers(props: any) {
  if (!props.items || props.items.length === 0) return null;
  return props.items.map((item: any) => (
    <Marker
      coordinate={{
        "latitude": Number(item.latitude),
        "longitude": Number(item.longitude)
      }}
      title={item.user_id}
      key={item.id.toString()}
      // description={item.address}
    >
        <FontAwesome name="user" size={20} color="tomato" />
    </Marker>
  ));
}


