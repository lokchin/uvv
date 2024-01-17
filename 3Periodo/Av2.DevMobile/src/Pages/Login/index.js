import React from 'react';
import { TextInput, SafeAreaView, View, Image, StyleSheet, Text } from 'react-native';
import { Link } from '@react-navigation/native';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewImg}>
        <Image style={styles.logoImg} source={{ uri: 'https://ih0.redbubble.net/image.851986479.0805/flat,1000x1000,075,f.jpg' }} />
      </View>
      <View style={styles.inputs}>
        <TextInput style={styles.inputEmail} placeholder='Email' />
        <TextInput style={styles.inputSenha} placeholder='Senha' />
      </View>
      <View style={styles.viewConfirmar}>
        <Link style={styles.btnConfirmar} to={{ screen: 'RPGlist' }}>
          <Text style={styles.txtBtnConfirmar}>Entrar</Text>
        </Link>
      </View>
      <View style={styles.viewLink}>
        <Link style={styles.link} to={{ screen: 'Register' }}>
          <Text>Registro</Text>
        </Link>
        <Link style={styles.link} to={{ screen: 'ForgotPassword' }}>
          <Text>Esqueci a senha</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36261B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewImg: {
    width: '50%',
    aspectRatio: 1,
    marginBottom: 20,
  },
  logoImg: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
    borderWidth: 3,
    borderColor: 'gray',
  },
  inputs: {
    padding: 10,
    width: '80%',
  },
  inputEmail: {
    height: 40,
    padding: 10,
    color: 'black',
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 4,
    marginBottom: 10,
  },
  inputSenha: {
    height: 40,
    padding: 10,
    color: 'black',
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 4,
    marginBottom: 20,
  },
  viewConfirmar: {
    padding: 5,
  },
  btnConfirmar: {
    height: 30,
    padding: 5,
    backgroundColor: '#c77942',
    borderRadius: 4,
    color: 'black',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtBtnConfirmar: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
  viewLink: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    color: '#c77942',
    paddingHorizontal: 5,
    fontWeight: 'bold',
  },
});

export default Login;