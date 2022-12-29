import {
    StyleSheet,
} from "react-native";

export default function EstilosDetalles() {
    return (
        StyleSheet.create({
            container: {
                height: "100%",
                width: "100%",
                backgroundColor: "#363636",
            },
            imageContainer: {
                positon: "relative",
                height: "50%",
            },
            imageBackground: {
                width: "100%",
                height: "100%",
                opacity: 0.3,
            },
            iconsContainer: {
                paddingTop: "10%",
                paddingHorizontal: "8%",
                position: "absolute",
                flexDirection: "row",
                width: "100%",
                alignSelf: "flex-end",
            },
            iconClose: {
                color: "#ffffff",
                marginRight: "57%",
            },
            iconShare: {
                color: "#ffffff",
                marginRight: "5%",
            },
            iconHeart: {
                color: "#ffffff",
            },
            categoriaContainer: {
                marginTop: "55%",
                paddingHorizontal: "8%",
                position: "absolute",
                width: "100%",
            },
            textCategoria: {
                color: "white",
                fontSize: 25,
            },
            textIngredientes: {
                flexDirection: "row",
                paddingLeft: "8%",
                paddingTop: "1%",
            },
            textServings: {
                color: "white",
            },
            textDetalles: {
                color: "white",
                fontSize: 15,
                paddingLeft: "8%",
            },
            ingredientesContainer: {
                paddingRight: "8%",
                width: "100%",
                justifyContent: "space-between",
                flexDirection: "row",
            },
            Divider: {
                borderBottomWidth: 1,
                borderBottomColor: "#ffffff",
                opacity: 0.3,
                marginHorizontal: "7.2%",
                marginTop: "3%",
                marginBottom: "3%",
            },
        })
    )
};