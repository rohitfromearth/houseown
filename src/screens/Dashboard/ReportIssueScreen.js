import React, { useState } from 'react';
import {
  View, Text, TextInput, StyleSheet, Alert, ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../components/Header';
import Button from '../../components/Button';

const ReportIssueScreen = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Plumbing');
  const [location, setLocation] = useState('Kitchen');
  const [description, setDescription] = useState('');
  const [urgency, setUrgency] = useState('Medium');
  const [contactMethod, setContactMethod] = useState('Phone');

  const handleUpload = () => {
    Alert.alert('Upload', 'Image/Video Uploaded (mock)');
  };

  const handleSubmit = async () => {
    const issue = {
      title, category, location, description, urgency, contactMethod,
      submittedAt: new Date().toISOString(),
    };

    try {
      const existing = await AsyncStorage.getItem('submittedIssues');
      const parsed = existing ? JSON.parse(existing) : [];
      const updated = [...parsed, issue];
      await AsyncStorage.setItem('submittedIssues', JSON.stringify(updated));

      Alert.alert('Success', 'Issue submitted successfully!');
      console.log('Submitted:', issue);
    } catch (err) {
      console.error('Storage error:', err);
    }

    // Reset form
    setTitle('');
    setCategory('Plumbing');
    setLocation('Kitchen');
    setDescription('');
    setUrgency('Medium');
    setContactMethod('Phone');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header title="Report Issue" />

      <Text style={styles.label}>Issue Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter title"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Category</Text>
      <Picker selectedValue={category} onValueChange={setCategory} style={styles.picker}>
        <Picker.Item label="Plumbing" value="Plumbing" />
        <Picker.Item label="Electrical" value="Electrical" />
        <Picker.Item label="Structural" value="Structural" />
      </Picker>

      <Text style={styles.label}>Location in House</Text>
      <Picker selectedValue={location} onValueChange={setLocation} style={styles.picker}>
        <Picker.Item label="Kitchen" value="Kitchen" />
        <Picker.Item label="Bathroom" value="Bathroom" />
        <Picker.Item label="Living Room" value="Living Room" />
      </Picker>

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.input, { height: 100 }]}
        multiline
        placeholder="Enter description"
        value={description}
        onChangeText={setDescription}
      />

      <Text style={styles.label}>Upload Image/Video</Text>
      <Button title="Upload" onPress={handleUpload} />

      <Text style={styles.label}>Urgency Level</Text>
      <Picker selectedValue={urgency} onValueChange={setUrgency} style={styles.picker}>
        <Picker.Item label="High" value="High" />
        <Picker.Item label="Medium" value="Medium" />
        <Picker.Item label="Low" value="Low" />
      </Picker>

      <Text style={styles.label}>Preferred Contact Method</Text>
      <Picker selectedValue={contactMethod} onValueChange={setContactMethod} style={styles.picker}>
        <Picker.Item label="Email" value="Email" />
        <Picker.Item label="Phone" value="Phone" />
      </Picker>

      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16, paddingBottom: 40 },
  label: { fontWeight: 'bold', marginTop: 12 },
  input: {
    borderWidth: 1, borderColor: '#ccc',
    paddingHorizontal: 12, paddingVertical: 8,
    borderRadius: 8, marginTop: 4,
  },
  picker: {
    marginTop: 4, borderWidth: 1,
    borderColor: '#ccc', borderRadius: 8,
  },
});

export default ReportIssueScreen;
