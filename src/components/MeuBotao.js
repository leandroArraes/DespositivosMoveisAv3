import React from 'react';
import { Link } from 'expo-router';

import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

import { useRouter } from 'expo-router';
const MeuBotao = ({nome}) => {

    const router = useRouter();


  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => {
          // Adicione a ação que deseja executar quando o botão for pressionado.
          
          
        }}
      >
        <Text style={styles.textoBotao}>{nome}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botao: {
    backgroundColor: '#3498db', // Cor de fundo do botão
    padding: 10,
    borderRadius: 5, // Borda arredondada
  },
  textoBotao: {
    color: 'white', // Cor do texto
    fontSize: 16,
  },
});

export default MeuBotao;