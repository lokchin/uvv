// src/components/Pages/Confirm.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const baseUrl = 'https://api.otaviolube.com';

const Confirm = ({ filme, handleConfirm }) => {
  return (
    <View style={styles.container}>
      {filme.poster ? (
        <Image
          style={styles.poster}
          source={{ uri: baseUrl + filme.attributes.poster.data.attributes.url }}
          resizeMode="cover"
        />
      ) : (
        <View style={styles.placeholder} />
      )}
      <Text style={styles.titulo}>{filme.attributes.titulo}</Text>
      <Text style={styles.subtitulo}>{filme.attributes.subtitulo}</Text>
      <Text style={styles.sinopse}>{filme.attributes.sinopse}</Text>
      <TouchableOpacity style={styles.botao} onPress={handleConfirm}>
        <Text style={styles.textoBotao}>Confirmar Compra</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#444',
      borderRadius: 10,
      padding: 10,
      marginBottom: 20,
    },
    poster: {
      width: 130,
      height: 160,
      marginBottom: 10,
      borderRadius: 5,
    },
    infoContainer: {
      flex: 1,
      alignItems: 'center',
    },
    titulo: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 10,
    },
    subtitulo: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 10,
    },
    sinopse: {
      fontSize: 14,
      color: '#fff',
      marginBottom: 10,
    },
    botao: {
      backgroundColor: '#008CBA',
      padding: 5,
      borderRadius: 5,
      marginTop: 16,
    },
    textoBotao: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

export default Confirm;
