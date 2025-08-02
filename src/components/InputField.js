import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const InputField = (props) => <TextInput style={styles.input} {...props} />;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
});

export default InputField;
