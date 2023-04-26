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
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
        
        <View style={styles.container2}>
          <TouchableOpacity
          style={styles.button}>
            <Text style={styles.text}> Sign In </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.text2}> Forgot your password? </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#b50b17',
    padding: 8,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#fff',
    backgroundColor: '#fff'
  },
  
  button: {
    borderWidth: 2,
    borderColor: `#ffffff`,
    padding: 10,
    borderRadius: 4,
    width: '80%',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
   container2: {
    flex: 1,
    alignItems: 'center',
    marginTop:20,
  },

  text2: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginTop:40,
  },
});