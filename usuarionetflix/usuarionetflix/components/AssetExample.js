import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/usuarioN.png')} />
      <Image style={styles.logo} source={require('../assets/usuarioN2.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    //justifyContent: 'center',
    padding: 24,
  },

  logo: {
    height: 120,
    width: 120,
    marginTop: 70,
  }
});
