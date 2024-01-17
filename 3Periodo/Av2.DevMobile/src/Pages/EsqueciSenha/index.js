import React from "react";
import { TextInput, SafeAreaView, View, Image, StyleSheet } from "react-native";
import { Link } from "@react-navigation/native";

const ForgotPassword = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewImg}>
        <Image
          style={styles.logoImg}
          source={{
            uri: "https://ih0.redbubble.net/image.851986479.0805/flat,1000x1000,075,f.jpg",
          }}
        />
      </View>
      <View style={styles.inputs}>
        <TextInput style={styles.inputEmail} placeholder="Email" />
        <TextInput style={styles.inputSenha} placeholder="Nome" />
        <TextInput style={styles.inputSenha} placeholder="Sobrenome" />
      </View>
      <View style={styles.viewConfirmar}>
        <Link style={styles.btnConfirmar} to={{ screen: "Login" }}>
          Enviar código de 2 fatores
        </Link>
      </View>
      <View style={styles.viewConfirmar}>
        <Link style={styles.btnConfirmar} to={{ screen: "Login" }}>
          Retornar
        </Link>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#36261B",
    alignItems: "center",
    justifyContent: "center",
  },
  viewImg: {
    width: "50%",
    aspectRatio: 1,
    marginBottom: 20,
  },
  logoImg: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "gray",
  },
  inputs: {
    padding: 10,
  },
  inputNome: {
    height: 40,
    padding: 10,
    color: "black",
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "white",
    borderRadius: 4,
    marginBottom: 10,
  },
  inputSobrenome: {
    height: 40,
    padding: 10,
    color: "black",
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "white",
    borderRadius: 4,
    marginBottom: 10,
  },
  inputEmail: {
    height: 40,
    padding: 10,
    color: "black",
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "white",
    borderRadius: 4,
    marginBottom: 10,
  },
  inputSenha: {
    height: 40,
    padding: 10,
    color: "black",
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "white",
    borderRadius: 4,
    marginBottom: 10,
  },
  inputConfirmarSenha: {
    height: 40,
    padding: 10,
    color: "black",
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "white",
    borderRadius: 4,
    marginBottom: 10,
  },
  viewConfirmar: {
    padding: 5,
  },
  btnConfirmar: {
    height: 30,
    padding: 5,
    backgroundColor: "#c77942",
    borderRadius: 4,
    color: "black",
    fontWeight: "bold",
  },
  txtBtnConfirmar: {
    color: "black",
    fontWeight: "bold",
  },
  viewLink: {
    flexDirection: "row",
    padding: 5,
  },
  link: {
    color: "white",
    padding: 5,
  },
});

export default ForgotPassword;
