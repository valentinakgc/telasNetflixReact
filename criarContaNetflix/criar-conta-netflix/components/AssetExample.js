import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>

      <Image style={styles.logo} source={require('../assets/logoNetflix.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'left',
    padding: 24,
  },

  logo: {
    height: 100,
    width: 100,
    marginTop: -810,
  }
});
