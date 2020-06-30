import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Magnetometer } from 'expo-sensors';


export default function Compass(){

const [magnetFound, setMagnetFound] = useState(false);
const [data, setData] = React.useState({
    x: 0,
    y: 0,
    z: 0,
  });


useEffect(() =>{  
async function initalSet(){
   let result = await Magnetometer.isAvailableAsync();
   console.log("The result is " + {result});
   setMagnetFound(result);
};
}, []);





return(
    <>
    <Text>underConstruction</Text>
    <Text>{magnetFound ? "Compass Detected!" : "No Compass Detected!"}</Text>
    </>
)

}