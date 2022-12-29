import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import { useNavigation } from "@react-navigation/native";
import { platillos } from "../platillos";

import EstilosHome from "./styleHome";
const styles = EstilosHome()

export default function App() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Componente SearchBar */}
      <View style={styles.inputContainer}>
        <Icon style={styles.iconSearch} name="search" size={17} />
        <TextInput
          style={styles.textStyleInput}
          placeholder="What do you want to eat?"
          placeholderTextColor={"#ffffff"}
        />
        <Icon style={styles.iconMicrophone} name="microphone" size={17} />
      </View>
      {/* Componente HorizontalList */}
      <View>
        <Text style={styles.textTittle}>TRENDING</Text>
        {/* Trending */}
        <ScrollView horizontal={true}>
          {platillos.map((platillo) => {
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
                      source={platillo.imagePath}
                    />
                  </TouchableOpacity>
                  <Text style={styles.textListItem}>{platillo.nombre}</Text>
                </View>
              );
            }
            return null;
          })}
        </ScrollView>
      </View>
      <View>
        <Text style={styles.textTittle}>RECENT</Text>
        {/* Recent */}
        <ScrollView horizontal={true}>
          {platillos.map((platillo) => {
            if (platillo.trending === false) {
              return (
                <View style={styles.listItemRecent} key={platillo.id}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("detailsFood", {
                        cardId: platillo.id,
                      })
                    }
                  >
                    <Image
                      style={styles.imgStyleRecent}
                      source={platillo.imagePath}
                    />
                  </TouchableOpacity>
                  <Text style={styles.textListItem2}>{platillo.nombre}</Text>
                </View>
              );
            }
            return null;
          })}
        </ScrollView>
      </View>
    </View>
  );
}
