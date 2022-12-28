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
  ImageBackground,
} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

import Icon from 'react-native-vector-icons/Ionicons'

export default function App () {
  return (
    <View style={styles.container}>
      {/* <ImageBackground style={styles.imageContainer} source={require('../assets/images/comida1.jpeg')}>
      </ImageBackground> */}
      <View style={styles.imageContainer}>
        <Image style={styles.imageBackground} source={require('../assets/images/comida1.jpeg')} />

        <View style={styles.iconsContainer}>
          <Icon
            style={styles.iconClose}
            name='close'
            size={45}
          />
          <Icon
            style={styles.iconShare}
            name='share-outline'
            size={40}
          />
          <Icon
            style={styles.iconHeart}
            name='heart-outline'
            size={40}
          />
        </View>
        
        <View style={styles.categoriaContainer}>
          <Text style={styles.textCategoria}>Trending</Text>
          <Text style={styles.textCategoria}>Nombre de platillo</Text>
        </View>
      </View>
      <View>
          <Text>Ingredients</Text>
          <Text>for 3 servings</Text>
          <Text></Text>
      </View>
      <View>
        <Text>Ingredientes</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#363636',
  },
  imageContainer: {
    positon: 'relative',
    height: '50%',
  },
  imageBackground: {
    width: '100%', 
    height: '100%',
    opacity: 0.3
  },
  iconsContainer:{
    paddingTop: '10%',
    paddingHorizontal: '8%',
    position: 'absolute',
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'flex-end',
    // backgroundColor: 'blue'
  },
  iconClose:{
    color: '#ffffff',
    marginRight: '57%',
  },
  iconShare:{
    color: '#ffffff',
    marginRight: '5%'
  },
  iconHeart:{
    color: '#ffffff',
  },
  categoriaContainer: {
    marginTop: '80%',
    paddingHorizontal: '8%',
    position: 'absolute',
    width: '100%',
    // backgroundColor: 'red'
  },
  textCategoria: {
    color: 'white',
    fontSize: 25
  }
})
