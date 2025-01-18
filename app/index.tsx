import { StatusBar } from 'expo-status-bar';
import { ReactElement } from 'react';
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

export default function App(): ReactElement {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.hello}>Another Piece of Text</Text>
      </View>
      <View>
        <Text style={styles.hello}>Hello World!!! 👋</Text>
      </View>
      <Button title="My first Button" />
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
  } as ViewStyle,
  hello: {
    fontSize: 18,
    fontFamily:
      Platform.OS === 'android'
        ? 'sans-serif'
        : Platform.OS === 'ios'
        ? 'Arial'
        : '',
    margin: 16,
    borderWidth: 3,
    borderColor: 'red',
    borderStyle: 'solid',
    borderRadius: 15,
    padding: 9,
  } as TextStyle,
});
