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
        Entrar
      </Text>

        <TextInput
          style={styles.input}
          placeholder="Email ou número de telefone"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
        />
        
        <View style={styles.container2}>
          <TouchableOpacity
          style={styles.button}>
            <Text style={styles.text2}> Entrar </Text>
          </TouchableOpacity>
        </View>

          <TouchableOpacity>
            <Text style={styles.text3}> Precisa de ajuda? </Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#1F1F1F',
    padding: 8,
  },

  input: {
    height: 40,
    margin: 12,
    marginLeft: 30,
    padding: 10,
    borderRadius: 4,
    width: '80%',
    backgroundColor: '#383838',
    color: '#7A7A7A',
  },
  
  button: {
    backgroundColor: '#b50b17',
    padding: 8,
    borderRadius: 4,
    width: '80%',
    alignItems: 'center',
  },

  container2: {
    flex: 1,
    alignItems: 'center',
    marginTop:20,
  },
  text1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
    padding: 30,
  },
  text2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },

  text3: {
    fontSize: 12,
    color: '#8C8C8C',
    textAlign: 'right',
    marginTop: 5,
    marginRight: 30,
  },
});