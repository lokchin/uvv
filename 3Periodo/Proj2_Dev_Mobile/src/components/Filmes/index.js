// src/components/Filmes/index.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const baseUrl = 'https://api.otaviolube.com';

export default function Filmes({ filmes, handleFilmeSelect }) {
  return (
    <View style={styles.container}>
      {filmes.map(filme => (
        <View key={filme.id} style={styles.filme}>
          {filme.poster ? (
            <Image
              style={styles.poster}
              source={{ uri: baseUrl + filme.attributes.poster.data.attributes.url }}
              resizeMode="cover"
            />
          ) : (
            <View style={styles.placeholder} />
          )}
          <View style={styles.infoContainer}>
            <Text style={styles.titulo}>{filme.attributes.titulo}</Text>
            <Text style={styles.subtitulo}>{filme.attributes.subtitulo}</Text>
            <Text style={styles.sinopse}>{filme.attributes.sinopse}</Text>
            <View style={styles.linha}>
              <Text style={styles.label}>Lançamento:</Text>
              <Text style={styles.valor}>
                {new Date(filme.attributes.publishedAt).toLocaleDateString()}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.botao}
              onPress={() => handleFilmeSelect(filme)}
            >
              <Text style={styles.textoBotao}>Comprar ingresso</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filme: {
    flexDirection: 'row',
    backgroundColor: '#444',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  poster: {
    width: 100,
    height: 150,
    marginRight: 10,
    borderRadius: 5,
  },
  infoContainer: {
    flex: 1,
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
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: '#fff',
    marginRight: 5,
  },
  valor: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
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