import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';
import Btn from '../components/SeuBotao';
import { FontAwesome5 } from '@expo/vector-icons';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MeuBotao from '../components/MeuBotao';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.centered}>
        <Link href="/pages/teste" asChild> 
         
        <Button title='teste'/>
        </Link>
     

    
       
    

    
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