import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function HardResults(props){
    let x = props.x;
    let y = props.y;
    let z = props.z;
    const [bearing, setBearing] = useState(0);

    useEffect(()=>{
        let angle = (Math.atan2(y,x)*(180 / Math.PI) -25);
        if(angle < 0){
          angle = angle + 360;
        }
          setBearing(angle);
         console.log(round(bearing));
    }, []);

    function round(n) {
        if (!n) {
          return 0;
        }
      
        return Math.floor(n * 100) / 100;
      }
   

    return (
        <>
            
            {/* <Text>{magnetFound ? "Compass Detected!" : "No Compass Detected!"}</Text> */}
            <Text>Data By Direction</Text>
            <Text>X: {round(x)}
             Y: {round(y)} 
             Z: {round(z)}</Text>
    <Text>Bearing:{round(bearing)}{'\u00b0'}</Text>
        </>
    )


}