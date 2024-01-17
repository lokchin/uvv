import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cartao from './src/components/Cartao';

export default function App() {
  const cartoes=[
    {
      nome: 'Disglair',
      classe: 'Espada de prata',
      descricao: 'A Disglair é uma espada de prata forjada pelos elfos e encontrada no jogo The Witcher 3.',
      ataque: '7',
      durabilidade: '300',
      imgUrl: 'https://static.wikia.nocookie.net/witcher/images/4/44/Tw3_silver_sword_lvl1.png'
    },
    {
      nome: 'Arco de Amos',
      classe: 'Arco',
      descricao: 'Amos, um antigo arqueiro, é considerado uma lenda pelos habitantes de Mondstadt. Diz-se que ele desapareceu misteriosamente após uma batalha lendária contra um dragão, deixando para trás sua lendária arma, o Arco de Amos.',
      ataque: '15',
      durabilidade: '240',
      imgUrl: 'https://i2.wp.com/gi-builds.sfo3.digitaloceanspaces.com/weapons/amos_bow.png'
    },
    {
      nome: 'Armadura de Ezio',
      classe: 'Armadura',
      descricao: 'A armadura de Ezio Auditore, também conhecida como a Armadura de Altaïr, foi criada por Altaïr Ibn-LaAhad como parte de seu legado para a Ordem dos Assassinos.',
      ataque: '0',
      durabilidade: '700',
      imgUrl: 'https://i.pinimg.com/originals/5c/9b/0c/5c9b0c6feddf9b71f98149b9d7813e37.jpg'
    },
    {
      nome: 'Bruxa das Chamas Carmesim',
      classe: 'Set de Itens',
      descricao: 'A Bruxa das Chamas Carmesim é um Conjunto de Artefatos de raridades 4 estrelas e 5 estrelas que pode ser obtido no Palácio Oculto da Fórmula Zhou.',
      ataque: 'Bônus de Dano Fogo +15%',
      durabilidade: '500',
      imgUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/d/d1/Item_Artifact_Strongbox_Crimson_Witch_of_Flames.png'
    }
  ]
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Escolha com sabedoria</Text>
       {cartoes.map(c => <Cartao cartao={c}/>)}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36261B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    color: 'gray',
    fontSize: 30,
    padding: 20,
    fontWeight: 'Bold' 
  }
});
