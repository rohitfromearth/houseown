import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { sampleUser } from '../../constants/dummyData';
import Header from '../../components/Header';
import Button from '../../components/Button';

const AppliancesScreen = ({ navigation }) => {
  const handleManualDownload = () => {
    // eslint-disable-next-line no-alert
    alert('Manual downloaded (mock)');
  };

  return (
    <View style={styles.container}>
      <Header title='Appliances' />
      <Text style={styles.title}>Your Installed Appliances</Text>
      <FlatList
        data={sampleUser.appliances}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.name}</Text>
            <Text>{item.brand} ({item.model})</Text>
            <Text>Warranty: {item.warranty}</Text>
            <Button title='Download Manual' onPress={handleManualDownload} />
          </View>
        )}
      />
      {/* <Button title='Download Manual' onPress={handleManualDownload} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
  item: { marginBottom: 12, backgroundColor: '#f9f9f9', padding: 12, borderRadius: 8 },
  text: { fontSize: 16, fontWeight: 'bold' },
});

export default AppliancesScreen;