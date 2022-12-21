/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';




export default function App() {
  return (
    <View style={styles.container}>
      {/* Componente SearchBar */}
      <View style={styles.inputContainer}>
				<TextInput
          style={styles.textStyleInput}
          placeholder="What do you want to eat?"
          placeholderTextColor={'#ffffff'}
        />
			</View>
			{/* Componente HorizontalList */}
			<View>
        <Text style={styles.textTittle}>TRENDING</Text>
				<ScrollView horizontal={true}>
          <View style={styles.listItem}>
						<Text>Item 1</Text>
					</View>
					<View style={styles.listItem}>
						<Text>Item 2</Text>
					</View>
					<View style={styles.listItem}>
						<Text>Item 3</Text>
					</View>
					<View style={styles.listItem}>
						<Text>Item 4</Text>
					</View>
				</ScrollView>
			</View>
      <Text style={styles.textStyle}>Hola</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#363636',
    padding: '7%',
  },
  inputContainer: {
    widht: '90%',
    height: 40,
    backgroundColor: '#464646',
    borderRadius: 4,
    flexDirection: 'row',
  },
  textStyleInput: {
    opacity: 0.5,
    fontSize: 13.5,
  },
  textTittle: {
    color: '#E62CB5',
    fontSize: 20,
    paddingTop: '10%',
  },
  listItem: {
    width: 100,
    hieght: 100,
    // backgroundColor: 'red',
  },
});
