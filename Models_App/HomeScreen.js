// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   Button,
//   Alert,
//   ScrollView,
// } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import ProductItem from "./ProductItem";

// const products = [
//   {
//     id: "1",
//     name: "Office Wear",
//     description: "Reversible Angora Cardigan",
//     price: 120,
//     image: require("./Images/dress1.png"),
//   },
//   {
//     id: "2",
//     name: "Black",
//     description: "Reversible Angora Cardigan",
//     price: 120,
//     image: require("./Images/dress2.png"),
//   },
//   {
//     id: "3",
//     name: "Church Wear",
//     description: "Reversible Angora Cardigan",
//     price: 120,
//     image: require("./Images/dress3.png"),
//   },
//   {
//     id: "4",
//     name: "Lamerei",
//     description: "Reversible Angora Cardigan",
//     price: 120,
//     image: require("./Images/dress4.png"),
//   },
//   {
//     id: "5",
//     name: "Black",
//     description: "Reversible Angora Cardigan",
//     price: 120,
//     image: require("./Images/dress2.png"),
//   },
//   {
//     id: "6",
//     name: "Church Wear",
//     description: "Reversible Angora Cardigan",
//     price: 120,
//     image: require("./Images/dress3.png"),
//   },
//   {
//     id: "7",
//     name: "Lamerei",
//     description: "Reversible Angora Cardigan",
//     price: 120,
//     image: require("./Images/dress4.png"),
//   },
//   {
//     id: "8",
//     name: "Church Wear",
//     description: "Reversible Angora Cardigan",
//     price: 120,
//     image: require("./Images/dress3.png"),
//   },
// ];

// export default function HomeScreen({ navigation }) {
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     const loadCart = async () => {
//       try {
//         const savedCart = await AsyncStorage.getItem("cart");
//         if (savedCart !== null) {
//           setCart(JSON.parse(savedCart));
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     loadCart();
//   }, []);

//   const addToCart = async (product) => {
//     try {
//       const updatedCart = [...cart, product];
//       setCart(updatedCart);
//       await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
//       Alert.alert("Success", `${product.name} added to cart`);
//     } catch (error) {
//       console.error(error);
//       Alert.alert("Error", "Failed to add to cart");
//     }
//   };

//   return (
//     <ScrollView>
//       {" "}
//       <View style={styles.container}>
//         <Text style={styles.header}>OUR STORY</Text>

//         <FlatList
//           data={products}
//           renderItem={({ item }) => (
//             <ProductItem product={item} addToCart={addToCart} />
//           )}
//           keyExtractor={(item) => item.id}
//           numColumns={2}
//           columnWrapperStyle={styles.row}
//         />
//         <Button
//           title="Go to Cart"
//           onPress={() => navigation.navigate("Cart")}
//         />
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     padding: 20,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   row: {
//     justifyContent: "space-between",
//   },
// });


import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  Alert,
  ScrollView,
  Image
} from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.HomeScreen}>
      <View>
      <Image
  source={require('./Images/dress1.png')}
  style={{ width: 200, height: 200 }}
/> <Image />
        <Text>Open</Text>
      <Text>Fashion</Text>
      </View>
     
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  HomeScreen: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  row: {
    justifyContent: "space-between",
  },
});