import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logoNetflix.png')} />
      <Image style={styles.foto} source={require('../assets/dispositivos.jpg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'left',
    justifyContent: 'center',
  },

  logo: {
    height: 100,
    width: 100,
    marginLeft: 20,
    marginTop: -1300,
  },

  foto: {
    height: 100,
    width: 400,
    marginLeft: -20,
    marginTop: 100
  }
});
