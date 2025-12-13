import React from "react";
import { FlatList, Text, View } from "react-native";
import TourItem from "./TourItem";

export default function TourFlatList(props: any) {
    const tours = [
        { id: "1", title: "Tour in London", uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg" },
        { id: "2", title: "Tour in Paris", uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-2.jpg" },
        { id: "3", title: "Tour in Tokyo", uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg" }
    ];

    return (
        <View style={props.style}>
            <Text style={{ fontSize: 20 }}>Tour with FlatList</Text>
            <Text style={{ color: 'grey', marginVertical: 10 }}>Let find out what most interesting things</Text>
            <FlatList
                data={tours}
                renderItem={({ item }) => <TourItem item={item} imageWidth={230} imageHeight={160} />}
                keyExtractor={(item) => item.id}
                horizontal={true}
            />
        </View>
    );
}


