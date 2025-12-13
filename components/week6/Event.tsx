import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";

export default function Event(props: any) {
  const [events, setEvents] = useState([]);

  useEffect(() => {

    const hello = async () => {

      try {
        let response = await fetch("https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json");
        
        let data = await response.json();

        console.log("Load Data : ", data);
        //SET STATE
        setEvents(data);
      } catch (error) {
        console.log("ERROR : ", error);
        throw error;
      }
    };

    hello();
  }, []);

  const renderEventItem = ({ item }: any) => {
    return (
      <View style={{ marginRight: 10 }}>
        <Image
          source={{ uri: item.uri }}
          style={{
            width: 280,
            height: 180,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        />
        <View
          style={{
            width: 280,
            flexDirection: "row",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            borderWidth: 1,
            borderColor: "#e0e0e0",
          }}
        >
          <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 16, color: "red", textAlign: "center" }}>
              {item.month}
            </Text>
            <Text style={{ fontSize: 24, color: "black", textAlign: "center" }}>
              {item.date}
            </Text>
          </View>
          <View style={{ padding: 10, flex: 1 }}>
            <Text style={{ fontSize: 16, color: "black" }}>{item.title}</Text>
            <Text style={{ color: "grey" }}>{item.datetime}</Text>
            <Text style={{ color: "grey" }}>{item.place}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={props.style}>
      <Text style={{ fontSize: 24 }}>Up Coming Events</Text>
      <Text style={{ color: "grey", marginVertical: 10 }}>
        What's the Worst That Could Happend
      </Text>
      <FlatList
        data={events}
        renderItem={renderEventItem}
        keyExtractor={(item: any) => item.id}
        horizontal={true}
      />
    </View>
  );
}
