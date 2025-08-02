import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputField from '../../components/InputField';
import Button from '../../components/Button';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <InputField placeholder="Email" value={email} onChangeText={setEmail} />
      <Button title="Send OTP" onPress={() => alert('OTP Sent')} />
      <Button title="Login Instead" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center' },
  title: { fontSize: 24, marginBottom: 16, textAlign: 'center' },
});

export default RegisterScreen;
