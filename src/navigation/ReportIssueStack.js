import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReportIssueScreen from '../screens/Dashboard/ReportIssueScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';

const Stack = createNativeStackNavigator();

const ReportIssueStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ReportIssue" component={ReportIssueScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
  </Stack.Navigator>
);

export default ReportIssueStack;
