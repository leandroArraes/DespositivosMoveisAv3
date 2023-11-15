import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

export default function Index() {
  return (
    <View style={styles.container}>
      <Link href="/pages/teste">Teste</Link>
      <MapView style={{ height: '100%', width: '100%' }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        initialRegion={{
          latitude: -22.9108283,
          longitude: -43.1754936,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        >
        <Marker
          coordinate={{ latitude: -22.9108283, longitude: -43.1754936 }}
          pinColor="blue"
        />
      </MapView>
      
      <StatusBar style="auto" />
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