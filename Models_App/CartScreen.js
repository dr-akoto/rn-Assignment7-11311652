import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Button, Alert } from "react-native";
 import AsyncStorage from "@react-native-async-storage/async-storage";
import CartItem from "./CartItem";

export default function CartScreen() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loadCart = async () => {
      try {
        const savedCart = await AsyncStorage.getItem("cart");
        if (savedCart !== null) {
          setCart(JSON.parse(savedCart));
        }
      } catch (error) {
        console.error(error);
      }
    };
    loadCart();
  }, []);

  const removeFromCart = async (id) => {
    try {
      const updatedCart = cart.filter((item) => item.id !== id);
      setCart(updatedCart);
      await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to remove from cart");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Checkout</Text>
      <FlatList
        data={cart}
        renderItem={({ item }) => (
          <CartItem product={item} removeFromCart={removeFromCart} />
        )}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.total}>
        Est. Total: {cart.reduce((sum,item) => sum + item.price,0)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  total: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
});

