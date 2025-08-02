import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/Header';

const MapScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title='Your Location'  />
      <Text style={styles.text}>🗺️ Map will here </Text>
      <Text style={styles.coord}>Pinned Location: 28.6139° N, 77.2090° E</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  text: { fontSize: 18, marginBottom: 10 },
  coord: { fontSize: 16, color: '#555' },
});

export default MapScreen;