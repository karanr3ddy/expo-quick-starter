import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to your app!</Text>
      {/* Add the StatusBar component */}
      <StatusBar style="auto" />
    </View>
  );
}
