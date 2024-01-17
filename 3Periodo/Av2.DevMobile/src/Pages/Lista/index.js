//Pages/ListPage/index.js

import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Cartao from '../../Components/Dashboard';

const RPGlist = () => {
  const cartoes = [
    {
      nome: 'Disglair',
      classe: 'Espada de prata',
      ataque: '7',
      descricao: 'A Disglair é uma espada de prata forjada pelos elfos e encontrada no jogo The Witcher 3.',
      durabilidade: '300',
      imgUrl: 'https://static.wikia.nocookie.net/witcher/images/4/44/Tw3_silver_sword_lvl1.png'
    },
    {
      nome: 'Armadura de Ezio',
      classe: 'Armadura',
      ataque: '0',
      descricao: 'A armadura de Ezio Auditore, também conhecida como a Armadura de Altaïr, foi criada por Altaïr Ibn-LaAhad como parte de seu legado para a Ordem dos Assassinos.',
      durabilidade: '700',
      imgUrl: 'https://i.pinimg.com/originals/5c/9b/0c/5c9b0c6feddf9b71f98149b9d7813e37.jpg'
    },
    {
      nome: 'Bruxa das Chamas Carmesim',
      classe: 'Set de Itens',
      ataque: 'Bônus de Dano Fogo +15%',
      descricao: 'A Bruxa das Chamas Carmesim é um Conjunto de Artefatos de raridades 4 estrelas e 5 estrelas que pode ser obtido no Palácio Oculto da Fórmula Zhou.',
      durabilidade: '500',
      imgUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/d/d1/Item_Artifact_Strongbox_Crimson_Witch_of_Flames.png'
    }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cartões de RPG:</Text>
      {cartoes.map((cartao, index) => (
        <Cartao key={index} cartao={cartao} />
      ))}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36261B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    color: 'white',
    fontSize: 30,
    padding: 30,
    fontFamily: 'serif',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default RPGlist;