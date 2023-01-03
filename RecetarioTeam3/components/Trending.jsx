import React from 'react'
import { View, ScrollView,TouchableOpacity, Image, Text } from 'react-native';
import data from '../platillos'
import PlatillosImages from '../platillosImages'
import EstilosHome from '../screens/styleHome';

const styles = EstilosHome()
export default function Trending() {
  return (
    <View>
    <Text style={styles.textTittle}>TRENDING</Text>
    {/* Trending */}
    <ScrollView horizontal={true}>
      {data.map((platillo) => {
        if (platillo.trending === true) {
          return (
            <View style={styles.listItemTrending} key={platillo.id}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("detailsFood", {
                    cardId: platillo.id,
                  })
                }
              >
                <Image
                  style={styles.imgStyle}
                  source={PlatillosImages[platillo.imagePath]}
                />
              </TouchableOpacity>
              <Text style={styles.textListItem}>{platillo.nombre}</Text>
            </View>
          );
        }
        return null;
      })}
    </ScrollView>
  </View>)
}
