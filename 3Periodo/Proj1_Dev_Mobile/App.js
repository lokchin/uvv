//app.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Filmes from './src/components/Filmes';

export default function App() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchFilmes() {
      try {
        const response = await Promise.race([
          fetch('https://api.otaviolube.com/api/filmes?populate=*'),
          new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 3000))
        ]);
        const data = await response.json();
        const filmesData = data.data.map(filme => ({
          ...filme,
          poster: filme.attributes.poster,
        }));
        setFilmes(filmesData);
      } catch (e) {
        console.error(e);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchFilmes();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (loading) {
    return (
      <View style={[styles.container, styles.center]}>
        <Text style={styles.loading}>Carregando...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, styles.center]}>
        <Text style={styles.error}>Erro ao carregar filmes</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Filmes🎬</Text>
      <Filmes filmes={filmes} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  error: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f00',
    textAlign: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  placeholder: {
    width: 100,
    height: 150,
    backgroundColor: '#444',
    marginBottom: 10,
  },
  poster: {
    width: 100,
    height: 150,
    marginBottom: 10,
  },
});