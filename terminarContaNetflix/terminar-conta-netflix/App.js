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
        Termine de configurar sua conta
      </Text>

      <Text style={styles.text2}>
        A Netflix é personalizada para você. Crie uma senha para assistir em qualquer aparelho quando quiser.
      </Text>

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

let styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 250,
    //justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    padding: 8,
  },
  text4: {
    margin: 24,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right',
    marginTop: -200,
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
