import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardStack from './DashboardStack';
import ReportIssueStack from './ReportIssueStack';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Dashboard" component={DashboardStack} />
    <Tab.Screen name="ReportIssue" component={ReportIssueStack} />
  </Tab.Navigator>
);

export default TabNavigator;
