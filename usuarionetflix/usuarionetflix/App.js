import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { SafeAreaView, StyleSheet2, TextInput, Button, onPressLearnMore,   TouchableOpacity} from 'react-native';
// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View> 
        <AssetExample />
      <Text style={styles.text1}>
        Quem está assistindo?
      </Text>

      <Text style={styles.text2}>
        Valentina
      </Text>

      <Text style={styles.text3}>
        Lucas
      </Text>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#1F1F1F',
    padding: 8,
  },

  text1: {
    marginTop: -400,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffff',
    textAlign: 'center',
  },
  text2: {
    marginTop: 170,
    fontSize: 16,
    color: '#ffff',
    textAlign: 'center',
  },
  text3: {
    marginTop: 170,
    fontSize: 16,
    color: '#ffff',
    textAlign: 'center',
  }
});