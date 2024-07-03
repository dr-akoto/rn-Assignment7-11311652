import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function CartItem({ product, removeFromCart }) {
  return (
    <View style={styles.itemContainer}>
      <Image source={product.image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => removeFromCart(product.id)}
      >
        <Text style={styles.buttonText}>×</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: "#888",
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: "#888",
  },
  button: {
    backgroundColor: "#FF6347",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
