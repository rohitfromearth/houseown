import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../../components/Button';

const ForgotPasswordScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.subtitle}>This is a mock screen.</Text>
      <Button title="Back to Login" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 16 },
  subtitle: { fontSize: 16, marginBottom: 24 },
});

export default ForgotPasswordScreen;
