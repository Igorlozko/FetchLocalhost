// App.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productId, setProductId] = useState('');

  const addProduct = async () => {
    // Implement code to send product data to the server
    try {
      const response = await fetch('http://localhost:3000/addProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: productName,
          price: parseFloat(productPrice),
          ourId: productId,
        }),
      });
      const data = await response.json();
      console.log('Product added:', data);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={productName}
        onChangeText={setProductName}
        placeholder="Product Name"
      />
      <TextInput
        style={styles.input}
        value={productPrice}
        onChangeText={setProductPrice}
        placeholder="Product Price"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={productId}
        onChangeText={setProductId}
        placeholder="Product ID"
      />
      <Button title="Add Product" onPress={addProduct} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: 200,
    paddingHorizontal: 10,
  },
});
