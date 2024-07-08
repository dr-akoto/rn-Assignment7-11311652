
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
  const [cart, setCart] = useState([]);

  const items = [
    {id: 1,
      image: require('./Images/dress1.png'),
      title: 'Office Wear',
      description: 'reversible angora cardigan',
      price: '$120',
    },
    {id:2,
      image: require('./Images/dress2.png'),
      title: 'Black',
      description: 'reversible angora cardigan',
      price: '$120',
    },
    {id:3,
      image: require('./Images/dress3.png'),
      title: 'Church Wear',
      description: 'reversible angora cardigan',
      price: '$120',
    },
    {id:4,
      image: require('./Images/dress4.png'),
      title: 'Lamerei',
      description: 'reversible angora cardigan',
      price: '$120',
    },
    {id:5,
      image: require('./Images/dress5.png'),
      title: 'Church Wear',
      description: 'reversible angora cardigan',
      price: '$120',
    },
    {id:6,
      image: require('./Images/dress6.png'),
      title: 'Lamerei',
      description: 'reversible angora cardigan',
      price: '$120',
    },
    {id:7,
      image: require('./Images/dress7.png'),
      title: 'Church Wear',
      description: 'reversible angora cardigan',
      price: '$120',
    },
    {id:8,
      image: require('./Images/dress1.png'),
      title: 'Lamerei',
      description: 'reversible angora cardigan',
      price: '$120',
    },
  ];


  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    try {
      const savedCart = await AsyncStorage.getItem('cart');
      if (savedCart !== null) {
        setCart(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error(error);
    }
  };
  const addToCart = async (item) => {
    try {
      const itemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
      let updatedCart;
  
      if (itemIndex !== -1) {
        
        updatedCart = cart.map((cartItem, index) => 
          index === itemIndex 
            ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
            : cartItem
        );
      } else {
        
        updatedCart = [...cart, { ...item, quantity: 1 }];
      }
  
      setCart(updatedCart);
      await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
      Alert.alert('Success', 'Item added to cart');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to add to cart');
    }
  };
  // const addToCart = async (item) => {
  //   try {
  //     const updatedCart = [...cart, item];
  //     setCart(updatedCart);
  //     await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
  //     Alert.alert('Success', 'Item added to cart');
  //   } catch (error) {
  //     console.error(error);
  //     Alert.alert('Error', 'Failed to add to cart');
  //   }
  // };

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.menuIcon}>
            <Image source={require('./Images/Menu.png')}/>
          </TouchableOpacity>
          <View style={styles.title}>
            <Image source={require('./Images/Logo.png')}/>
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.icon}>
              <Image source={require('./Images/Search.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Cart')}>
              <Image source={require('./Images/shoppingBag.png')}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.gridContainer}>
            {items.map((item) => (
              <View key={item.id} style={styles.itemContainer}>
                <Image source={item.image} style={styles.itemImage} />
                <View style={styles.itemDetails}>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Text style={styles.itemDescription}>{item.description}</Text>
                  <Text style={styles.itemPrice}>{item.price}</Text>
                </View>
                <TouchableOpacity style={styles.plusIcon} onPress={() => addToCart(item)} activeOpacity={0.5}>
                  <Image source={require('./Images/add_circle.png')}/>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  menuIcon: {
    padding: 10,
    width:50
  },
  menuText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    padding: 10,
    width:20,
    marginRight:15
  },
  iconText: {
    fontSize: 20,
  },
  title:{
    display:'flex',
    flexDirection:'column'
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemContainer: {
    width: '48%',
    marginBottom: 20,
  },
  itemImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
  },
  itemDetails: {
    padding: 10,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemDescription: {
    fontSize: 14,
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  plusIcon: {
    position: 'absolute',
    top: 140,
    right: 20,
    padding: 5,
    borderRadius: 50,
  },
  plusText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  scrollContainer:{
    padding:20,
  }
});



export default HomeScreen;

