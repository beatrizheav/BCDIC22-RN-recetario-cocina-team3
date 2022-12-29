import {
  StyleSheet,
} from "react-native";

export default function EstilosHome () {
    return(
        StyleSheet.create({
            container: {
              height: "100%",
              width: "100%",
              backgroundColor: "#363636",
              padding: "7%",
              paddingTop: "9%",
            },
            inputContainer: {
              widht: "90%",
              height: 40,
              backgroundColor: "#464646",
              borderRadius: 4,
              flexDirection: "row",
            },
            textStyleInput: {
              opacity: 0.5,
              fontSize: 13.5,
              marginRight: 120,
              color: "white"
            },
            textTittle: {
              color: "#E62CB5",
              fontSize: 20,
              paddingTop: "10%",
            },
            listItemTrending: {
              width: 115,
              height: 192,
              padding: "2%",
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
              height: 235,
              padding: "1.4%",
            },
            imgStyleRecent: {
              width: 135,
              height: 150,
              marginTop: 10,
              borderRadius: 5,
            },
            textListItem: {
              paddingTop: "5%",
              fontSize: 13,
              color: "#ffffff",
            },
            textListItem2: {
              paddingTop: "5%",
              fontSize: 15,
              color: "#ffffff",
            },
            iconSearch: {
              color: "#ffffff",
              alignSelf: "center",
              padding: "3%",
            },
            iconMicrophone: {
              color: "#ffffff",
              padding: "3%",
            },
          })
    )
}
