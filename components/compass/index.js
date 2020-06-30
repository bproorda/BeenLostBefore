import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Magnetometer, Accelerometer, Gyroscope } from 'expo-sensors';
import * as Permissions from 'expo-permissions';
//import { magnetometer } from "react-native-sensors";


export default function Compass() {

    const [magnetFound, setMagnetFound] = useState(false);
    const [data, setData] = React.useState({
        x: 0,
        y: 0,
        z: 0,
    });

  


 // To run on initial render of page   
    useEffect(() => {

        alertIfRemoteNotificationsDisabledAsync()
        initalSet();
    }, []);

    Magnetometer.addListener(result => {
        setData({ data: result });
        //console.log(result);
        console.log(data);
      });
   Magnetometer.setUpdateInterval(10000);

    async function initalSet() {
        let result = await Magnetometer.isAvailableAsync();
        console.log("The result is " + result);
        setMagnetFound(result);
    };

    async function alertIfRemoteNotificationsDisabledAsync() {
        const { status } = await Permissions.getAsync(Permissions.MOTION);
        if (status !== 'granted') {
            alert('Hey! You might want to enable notifications for my app, they are good.');
        } else {
            console.log("Permission Granted");
        }
    }

   

    return (
        <>
            <Text>underConstruction</Text>
            <Text>{magnetFound ? "Compass Detected!" : "No Compass Detected!"}</Text>
            <Text>X: {data.x} Y: {data.y} Z: {data.z}</Text>
        </>
    )

}