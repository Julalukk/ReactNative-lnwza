import React from "react";
import { Image, Text, View } from "react-native";

export default function TourItem(props: any) {
    const { item } = props;
    const imageWidth = props.imageWidth || 200;
    const imageHeight = props.imageHeight || 150;
    
    return (
        <View style={{ marginRight: 10 }}>
            <Image 
                source={{ uri: item?.uri || "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg" }}
                style={{ width: imageWidth, height: imageHeight, borderRadius: 10 }}
            />
            <View style={{
                marginTop: -30,
                height: 30,
                width: imageWidth,
                paddingHorizontal: 10,
                backgroundColor: 'black',
                opacity: 0.5,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10
            }}>
                <Text style={{ fontSize: 20, color: "white" }}>{item?.title || "Tour in Somewhere"}</Text>
            </View>
        </View>
    );
}
