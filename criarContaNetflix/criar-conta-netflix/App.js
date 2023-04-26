import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import { SafeAreaView, StyleSheet2, TextInput, Button, onPressLearnMore,   TouchableOpacity} from 'react-native';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
          <TouchableOpacity>
            <Text style={styles.text4}> Entrar </Text>
          </TouchableOpacity>

      <Text style={styles.text}>
        PASSO 2 DE 3
      </Text>

      <Text style={styles.text1}>
        Crie uma senha para iniciar sua assinatura
      </Text>

      <Text style={styles.text2}>
        Faltam só mais alguns passos! Nós também detestamos formulários.
      </Text>

      <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
        />
      <TextInput
          style={styles.input}
          placeholder="Adicione uma senha"
          secureTextEntry={true}
        />

    <View style={styles.container2}>
      <TouchableOpacity
          style={styles.button}>
            <Text style={styles.text3}> Próximo </Text>
      </TouchableOpacity>
    </View>

        <AssetExample />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  text4: {
    margin: 24,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right',
  },

  text: {
    fontSize: 12,
    textAlign: 'left',
    marginLeft: 24,
    marginTop: 80,
  },

  text1: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 24,
    marginTop: 10,
  },

  text2: {
    fontSize: 16,
    textAlign: 'left',
    marginLeft: 24,
    marginTop: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#636363',
    height: 50,
    margin: 12,
    marginLeft: 30,
    padding: 15,
    borderRadius: 4,
    width: '80%',
    color: '#7A7A7A',
  },

  container2: {
    flex: 1,
    alignItems: 'center',
    marginTop: 15,
  },

  button: {
    backgroundColor: '#FA1500',
    padding: 15,
    borderRadius: 4,
    width: '80%',
    alignItems: 'center',
  },

  text3: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
