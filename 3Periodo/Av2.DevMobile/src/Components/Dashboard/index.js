import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

const Cartao = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.viewImg}>
        <Image source={{ uri: props.cartao.imgUrl }} style={styles.img} />
      </View>
      <View style={styles.viewData}>
        <Text style={styles.classe}>Classe: {props.cartao.classe}</Text>
        <Text style={styles.nome}>Nome do Item: {props.cartao.nome}</Text>
        <Text style={styles.descricao}>Descrição: {props.cartao.descricao} </Text>
        <Text style={styles.ataque}>Ataque: {props.cartao.ataque}</Text>
        <Text style={styles.durabilidade}>Durabilidade: {props.cartao.durabilidade}</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => alert("Item adquirido com sucesso.")}
        >
          <Text>Adquirir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "70%",
    flexDirection: "row",
    padding: 10,
    margin: 3,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#36261B",
  },
  viewImg: {
    width: "50%",
    height: 170,
    padding: 10,
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  viewData: {
    padding: 10,
    width: "70%",
    height: "100%",
    borderRadius: 10,
    backgroundColor: "gray",
  },
  classe: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    marginBottom: 5,
  },
  nome: {
    fontSize: 18,
    color: "white",
    marginBottom: 5,
  },
  ataque: {
    fontSize: 14,
    color: "white",
    marginBottom: 5,
  },
  durabilidade: {
    fontSize: 14,
    color: "white",
    marginBottom: 5,
  },
  descricao: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
    marginBottom: 2,
  },
  btn: {
    backgroundColor: "#c77942",
    textAlign: "center",
    borderRadius: 10,
    padding: 10,
  },
});

export default Cartao;
