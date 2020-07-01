import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import compass from './images/compass.png';
import Compass from './components/compass'

export default function App() {

  const [value, onChangeText] = React.useState('Useless Placeholder');



  return (
    <View style={styles.container}>
      <Text>I've Been Lost Before and this is what it looks like</Text>
      <Text>{value}</Text>
      <Compass />
      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
      <StatusBar style="auto" />
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
