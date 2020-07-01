import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import compass from './images/compass.png';
import Compass from './components/compass'

export default function App() {

  const [value, onChangeText] = React.useState('Useless Placeholder');
  const [toggle, setToggle] = useState(true);


  function toggleHandler(){
      setToggle(!toggle);
  }
function buttonStyles(){
  let style = {
    marginTop:30,
    padding: 15,
    width: 50,
    height:35,
  }
  if (toggle) {
    style.backgroundColor = "red";
  } else {
    style.backgroundColor = "blue";
  }
  return style;
}

  return (
    <View style={styles.container}>
      <Compass toggle={toggle} />
      <StatusBar style="auto" />
      <Button style={buttonStyles()} title={toggle ? "Hard" : "Easy"} onPress={toggleHandler} ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
