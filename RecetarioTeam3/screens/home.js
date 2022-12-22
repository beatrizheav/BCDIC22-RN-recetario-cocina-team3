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
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'

import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { platillos } from '../platillos';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default function App() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Componente SearchBar */}
        <View style={styles.inputContainer}>
            <Icon
                style={styles.iconSearch}
                name="search"
                size={17}
            />
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
                {platillos.map((platillo)=>{
                  return(
                    <View style={styles.listItemTrending}>
                        <TouchableOpacity onPress={() => navigation.navigate('detailsFood')}>
                            <Image  style={styles.imgStyle}
                            source={platillo.imagePath}/>
                        </TouchableOpacity>
				        <Text style={styles.textListItem}>{platillo.nombre}</Text>
			        </View>
                  )
                })}
			</ScrollView>
		</View>
        <View>
            <Text style={styles.textTittle}>RECENT</Text>
            <ScrollView horizontal={true}>
            {platillos.map((platillo)=>{
                    return(
                    <View style={styles.listItemRecent}>
                        <TouchableOpacity onPress={() => navigation.navigate('detailsFood')}>
                            <Image  style={styles.imgStyleRecent}
                            source={platillo.imagePath}/>
                        </TouchableOpacity>
				        <Text style={styles.textListItem2}>{platillo.nombre}</Text>
			        </View>
                    )
            })}
            </ScrollView>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#363636',
    padding: '7%',
    paddingTop: '9%'
  },
  inputContainer: {
    widht: '90%',
    height: 40,
    backgroundColor: '#464646',
    borderRadius: 4,
    flexDirection: 'row',
    alignContent: 'center',
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
  listItemTrending: {
    width: 115,
    height: 160,
    backgroundColor: 'red',
    padding: '2%',
  },
  imgStyle: {
    width: 100,
    height: 100,
    marginTop: 10,
    padding: 5,
    borderRadius: 3,
  },
  listItemRecent: {
    width: 140,
    height: 225,
    backgroundColor: 'red',
    padding: '1.4%',
  },
  imgStyleRecent: {
    width: 135,
    height: 150,
    marginTop: 10,
    borderRadius: 3,
  },
  textListItem: {
    paddingTop: '5%',
    fontSize: 13,
    color: '#ffffff',
  },
  textListItem2: {
    paddingTop: '5%',
    fontSize: 15,
    color: '#ffffff',
  },
  iconSearch: {
    color: '#ffffff',
    alignSelf: 'center',
    padding: '3%'
  }
});
