import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '../screens/Dashboard/DashboardScreen';
import HousePlanScreen from '../screens/Dashboard/HousePlanScreen';
import AppliancesScreen from '../screens/Dashboard/AppliancesScreen';
import MapScreen from '../screens/Dashboard/MapScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';

const Stack = createNativeStackNavigator();

const DashboardStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Dashboard" component={DashboardScreen} />
    <Stack.Screen name="HousePlan" component={HousePlanScreen} />
    <Stack.Screen name="Appliances" component={AppliancesScreen} />
    <Stack.Screen name="Map" component={MapScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
  </Stack.Navigator>
);

export default DashboardStack;
