import React from 'react';
// import type { Node } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Image,
} from 'react-native'

export default function App () {
  return (
    <Text style={styles.styleTex}>Detalles el Producto</Text>
  )
}

const styles = StyleSheet.create({
  styleTex: {
    fontSize: 50
  }
})
