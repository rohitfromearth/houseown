import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import Button from '../../components/Button';

const DashboardScreen = ({ navigation }) => {
  const email = useSelector(state => state.auth.user?.email);
  const name = email ? email.split('@')[0] : 'User';

  const capitalizedName = name
    .replace(/[\W_]/g, ' ') 
    .replace(/\b\w/g, c => c.toUpperCase()); 

  return (
    <View style={styles.container}>
      <Header title="Dashboard" />
      <Text style={styles.welcome}>Welcome, {capitalizedName}!</Text>

      <Button title="House Plan" onPress={() => navigation.navigate('HousePlan')} />
      <Button title="Appliances" onPress={() => navigation.navigate('Appliances')} />

      <Button title="Map" onPress={() => navigation.navigate('Map')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  welcome: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default DashboardScreen;
