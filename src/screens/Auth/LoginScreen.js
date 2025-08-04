import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, StyleSheet, TouchableOpacity, Alert,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slices/authSlice';
import Header from '../../components/Header';
import Button from '../../components/Button';

const LoginScreen = ({ navigation }) => {
  // const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const loadRemembered = async () => {
      const rememberedEmail = await AsyncStorage.getItem('rememberedUser');
      if (rememberedEmail) {
        setEmail(rememberedEmail);
        setRememberMe(true);
      }
    };
    loadRemembered();
  }, []);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in both fields');
      return;
    }

    // dispatch(login({ email }));
    await AsyncStorage.setItem('isLoggedIn', 'true');
    await AsyncStorage.setItem('userEmail', email);
    if (rememberMe) {
      await AsyncStorage.setItem('rememberedUser', email);
    } else {
      await AsyncStorage.removeItem('rememberedUser');
    }

    Alert.alert('Login Successful', `Welcome ${email}`);
    navigation.replace('Main');
  };

  return (
    <View style={styles.container}>
      <Header title="Login" />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <View style={styles.passwordWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rememberRow}>
        <CheckBox
          value={rememberMe}
          onValueChange={setRememberMe}
          tintColors={{ true: '#007AFF', false: '#ccc' }}
        />
        <Text style={styles.rememberText}>Remember Me</Text>
      </View>

      <Button title="Login" onPress={handleLogin} />

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerText}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center' },
  input: {
    borderWidth: 1, borderColor: '#ccc',
    paddingHorizontal: 12, paddingVertical: 10,
    borderRadius: 8, marginBottom: 12,
  },
  passwordWrapper: { position: 'relative', marginBottom: 12 },
  forgotText: {
    position: 'absolute', right: 4, bottom: 12,
    fontSize: 13, color: '#007AFF',
  },
  rememberRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  rememberText: { marginLeft: 8, fontSize: 14 },
  registerText: { textAlign: 'center', marginTop: 20, color: '#555' },
});

export default LoginScreen;
