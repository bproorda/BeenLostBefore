import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Magnetometer, Accelerometer, Gyroscope } from 'expo-sensors';
import * as Permissions from 'expo-permissions';
import HardResults from '../hardResults'



export default function Compass() {

    const [magnetFound, setMagnetFound] = useState(false);
    const [data, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
    });
    const [bearing, setBearing] = useState(0);

  


 // To run on initial render of page   
    useEffect(() => {
        alertIfRemoteNotificationsDisabledAsync()
        initalSet();
    }, []);

 function getNumbers(){
       Magnetometer.setUpdateInterval(2000);
      Magnetometer.addListener(result => {
        setData(result);
        //console.log(result);
        console.log(data);
        // Magnetometer.removeAllListeners()
      });
}
useEffect(getNumbers,[]);

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

   
    return(
        <>
        <HardResults x={data.x} y={data.y} z = {data.z} />
        </>
    )

}