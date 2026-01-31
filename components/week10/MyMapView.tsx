import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import MapView from "react-native-maps";
import PeopleMarkers from "./peopleMarkers";
import { getData, postData } from "@/utils/api";

export default function MyMapView(props: any) {
    const width = Dimensions.get("screen").width;
    const height = Dimensions.get("screen").height;

    // พิกัดของคนจาก API แทนมหาวิทยาลัยในปทุมธานี
    const [people, setPeople] = useState<any[]>([]);
    const loadPeople = async () => {
        try {
            let items = await getData("/location");
            setPeople(items);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => { loadPeople(); }, []);

    if (props.location) {
        //DISPLAY MAP ON YOUR LOCATION
        return (
            <MapView
                style={{ width: width, height: height }}
                initialRegion={{
                    latitude: props.location.coords.latitude,
                    longitude: props.location.coords.longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
                showsUserLocation={true}
                onUserLocationChange={(event) => {
                    // console.log("LOCATION CHANGED : " , event);
                    if (event.nativeEvent.coordinate) {
                        let new_location = {
                            coords: event.nativeEvent.coordinate,
                            mocked: false,
                            timestamp: event.nativeEvent.coordinate.timestamp,
                        };
                        //SET LOCATION
                        props.setLocation(new_location);
                        //SEND TO SERVER
                        //if (props.recordLocation) {
                        console.log("SEND TO SERVER");
                        postData("/location", {
                            user_id: "Julaluk saenskad",
                            latitude: event.nativeEvent.coordinate.latitude,
                            longitude: event.nativeEvent.coordinate.longitude,
                        });
                        //}

                    }
                }}
            >
                <PeopleMarkers items={people} />
            </MapView>
        );
    } else {
        // แสดงแผนที่ศูนย์กลางประเทศไทย พร้อมหมุดคนจาก API
        return (
            <MapView
                style={{ width: width, height: height }}
                initialRegion={{
                    latitude: 14.07,
                    longitude: 100.60,
                    latitudeDelta: 0.5,
                    longitudeDelta: 0.5,
                }}
            >
                <PeopleMarkers items={people} />
            </MapView>
        );
    }
}
