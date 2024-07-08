import AsyncStorage from '@react-native-async-storage/async-storage';

const CART_STORAGE_KEY = '@MyApp:cart';

export const getCart = async () => {
  try {
    const cartJson = await AsyncStorage.getItem(CART_STORAGE_KEY);
    return cartJson ? JSON.parse(cartJson) : [];
  } catch (error) {
    console.error('Error getting cart:', error);
    return [];
  }
};

export const addToCart = async (product) => {
  try {
    const cart = await getCart();
    const updatedCart = [...cart, product];
    await AsyncStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedCart));
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
};

export const removeFromCart = async (productId) => {
  try {
    const cart = await getCart();
    const updatedCart = cart.filter(item => item.id !== productId);
    await AsyncStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedCart));
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
};