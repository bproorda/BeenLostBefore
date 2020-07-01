import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Magnetometer, Accelerometer, Gyroscope } from 'expo-sensors';
import * as Permissions from 'expo-permissions';
//import { magnetometer } from "react-native-sensors";


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
        //console.log(data);
        //return Magnetometer.removeAllListeners()
      });
}

 useEffect(()=> {
   getNumbers();
 });
 useEffect(()=>{
     let angle = 0;
     let {x, y} = data;

     //math.atan2 finds radians between y axis and vector(x, y)
     if (Math.atan2(x, y) >= 0) {
        angle = Math.atan2(x, y) * (180 / Math.PI);
      } else {
        angle = (Math.atan2(x, y) + 2 * Math.PI) * (180 / Math.PI);
      }
      setBearing(angle);
     //console.log(bearing);
 }, [data]);

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

    function round(n) {
        if (!n) {
          return 0;
        }
      
        return Math.floor(n * 100) / 100;
      }
   

    return (
        <>
            <Text>underConstruction</Text>
            <Text>{magnetFound ? "Compass Detected!" : "No Compass Detected!"}</Text>
            <Text>X: {round(data.x)}
             Y: {round(data.y)} 
             Z: {round(data.z)}</Text>
    <Text>Bearing: {round(bearing)}</Text>
        </>
    )

}