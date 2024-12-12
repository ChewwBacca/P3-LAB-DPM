import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';

export default function HomeScreen() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('Component Mounted');

    return () => {
      console.log('Component Unmounted');
    };
  }, []);

  useEffect(() => {
    console.log(`Counter updated: ${counter}`);
  }, [counter]);

  return (
    <ImageBackground
      source={require('../../assets/hannahgrace.jpg')} 
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Muh. Azizurrohman</Text>
          <Text style={styles.counter}>Counter: {counter}</Text>
          <Button
            title="TEKAN!"
            onPress={() => setCounter(counter + 1)}
            color="#4CAF50" 
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    backgroundColor: '#7b7c7a', 
    padding: 20,
    borderRadius: 15, 
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3, 
    elevation: 5, 
  },
  title: {
    fontSize: 24,
    color: 'white', 
    marginBottom: 20,
  },
  counter: {
    fontSize: 20,
    color: 'white', 
    marginBottom: 10,
  },
});
