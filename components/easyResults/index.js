import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { RotationGestureHandler } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import { preventAutoHide } from 'expo-splash-screen';

export default function EasyResults(props) {
    let x = props.x;
    let y = props.y;
    let z = props.z;
    const [bearing, setBearing] = useState(0);
    //const [temp, setTemp] = useState('Hot');
    let tempWord ="Hot";

    useEffect(() => {
        CalcBearing();
    }, []);

    function CalcBearing() {
        let angle = (Math.atan2(y, x) * (180 / Math.PI) - 25);
        if (angle < 0) {
            angle = angle * -1;
        }
        setBearing(angle);
        console.log(bearing);
    };

    useEffect(() => {
        CalcBearing();
    }, [props]);


function changeStyle(){
    let style = {
            width: 300,
            height: 300,
            borderRadius: 500,
    }
    if(bearing <=180 && bearing > 150){
        tempWord = "Frozen";
        style.backgroundColor = "darkblue";
    }else if (bearing <= 150 && bearing > 120){
        tempWord = "Colder";
        style.backgroundColor = "blue";
    }else if (bearing <= 120 && bearing > 90){
        tempWord = "Cold";
        style.backgroundColor = "cornflowerblue";
    }else if (bearing <= 90 && bearing > 60){
        tempWord = "Warm";
        style.backgroundColor = "tomato";
    }else if (bearing <= 60 && bearing > 30){
        tempWord = "Hot";
        style.backgroundColor = "red";
    }else if (bearing <= 30 && bearing > 5){
        tempWord = "Hotter";
        style.backgroundColor = "tomato";
    }else if (bearing <= 5 && bearing >= 0){
        tempWord = "That Way!";
        style.backgroundColor = "green";
    }

    return style;
}
function round(n) {
    if (!n) {
        return 0;
    }

    return Math.floor(n * 100) / 100;
}

const styles = StyleSheet.create({
    tempStyle: {
        margin: "auto",
        marginTop: 50,
        color: "white",
        fontSize: 30,
        textAlign: "center",
    },
    bearingStyle: {
        margin: "auto",
        marginTop: 30,
        color: "white",
        fontSize: 30,
        textAlign: "center",
    },
    titleStyle: {
        margin: "auto",
        marginTop: 30,
        fontSize: 40,
        textAlign: "center",
    },
});
    return (
    <>
    <Text style={styles.titleStyle}>Get the Bearing to Zero!</Text>
    <View style={changeStyle()}>
        <Text style={styles.tempStyle}>{tempWord}</Text>
        <Text style={styles.bearingStyle}>Bearing: {round(bearing)}{'\u00b0'}</Text>
        </View>
        </>
    );




}