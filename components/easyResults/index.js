import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { RotationGestureHandler } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

export default function EasyResults(props) {
    let x = props.x;
    let y = props.y;
    let z = props.z;
    const [bearing, setBearing] = useState(0);
    const [temp, setTemp] = useState('Hot');

    useEffect(() => {
        CalcBearing();
    }, []);

    function CalcBearing() {
        let angle = (Math.atan2(y, x) * (180 / Math.PI) - 25);
        if (angle < 0) {
            angle = angle * -1;
        }
        setBearing(angle);
        console.log(round(bearing));
    };

    useEffect(() => {
        CalcBearing();
    }, [props]);

    function round(n) {
        if (!n) {
            return 0;
        }

        return Math.floor(n * 100) / 100;
    }

function changeStyle(){
    let style = {
            width: 300,
            height: 300,
            borderRadius: '50%',
    }
    if(bearing <=180 && bearing > 90){
        setTemp('Cold');
        style.backgroundColor = "darkblue";
    } else (bearing >= 0 && bearing <= 90){
        setTemp('Hot');
        style.backgroundColor = "red";
    }

    return style;
}


    return (
    <View style={changeStyle()}>{temp}</View>
    )
}