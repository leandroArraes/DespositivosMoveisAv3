import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

export default function Index() {
  return (
    <View style={styles.container}>
        <View style={styles.centered}>
            <Text>Foi</Text> 
            <Link href="/">Home</Link>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});