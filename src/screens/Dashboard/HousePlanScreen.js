import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Header from '../../components/Header';

const HousePlanScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header title="House Plan" />

      <Image
        source={require('../../assets/compare_recognise_plan.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>House Features:</Text>
      <Text style={styles.feature}>• 3 Bedrooms</Text>
      <Text style={styles.feature}>• 2 Bathrooms</Text>
      <Text style={styles.feature}>• Garage</Text>
      <Text style={styles.feature}>• Garden</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  image: {
    width: '100%',
    height: 250,
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  feature: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default HousePlanScreen;
