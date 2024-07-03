// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import HomeScreen from "./HomeScreen";
// import CartScreen from "./CartScreen";

// const Stack = createStackNavigator();

// export default function App() {
//   return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen
    //       name="Home"
    //       component={HomeScreen}
    //       options={{ title: "Open Fashion" }}
    //     />
    //     <Stack.Screen
    //       name="Cart"
    //       component={CartScreen}
    //       options={{ title: "Checkout" }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
//     <HomeScreen/>
//   );
// }

import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

const App = () => {
  const items = [
    {
      image: require('./Images/dress1.png'),
      title: 'Office Wear',
      description: 'reversible angora cardigan',
      price: '$120',
    },
    {
      image: require('./Images/dress1.png'),
      title: 'Black',
      description: 'reversible angora cardigan',
      price: '$120',
    },
    {
      image: require('./Images/dress1.png'),
      title: 'Church Wear',
      description: 'reversible angora cardigan',
      price: '$120',
    },
    {
      image: require('./Images/dress1.png'),
      title: 'Lamerei',
      description: 'reversible angora cardigan',
      price: '$120',
    },
    {
      image: require('./Images/dress1.png'),
      title: 'Church Wear',
      description: 'reversible angora cardigan',
      price: '$120',
    },
    {
      image: require('./Images/dress1.png'),
      title: 'Lamerei',
      description: 'reversible angora cardigan',
      price: '$120',
    },
    {
      image: require('./Images/dress1.png'),
      title: 'Church Wear',
      description: 'reversible angora cardigan',
      price: '$120',
    },
    {
      image: require('./Images/dress1.png'),
      title: 'Lamerei',
      description: 'reversible angora cardigan',
      price: '$120',
    },
  ];

  return (
    <ScrollView>
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
          <TouchableOpacity style={styles.icon}>
          <Image source={require('./Images/shoppingBag.png')}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
       
        <View style={styles.gridContainer}>
          {items.map((item, index) => (
            <View key={index} style={styles.itemContainer}>
              <Image source={item.image} style={styles.itemImage} />
              <View style={styles.itemDetails}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
              </View>
              <TouchableOpacity style={styles.plusIcon}>
              <Image source={require('./Images/add_circle.png')}/>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </View></ScrollView>
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
});

export default App;